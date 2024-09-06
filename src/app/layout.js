"use client";
import { useEffect, useState } from "react";
import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
});

const fetchProductData = async () => {
  const response = await fetch("/api/products.json");
  const data = await response.json();
  return data;
};

const getDetailedCartItems = async () => {
  const productData = await fetchProductData();
  const cartData = JSON.parse(localStorage.getItem("cart") || "{}");

  const detailedCartItems = Object.keys(cartData)
    .map((itemId) => {
      const product = productData[`item${itemId}`];
      if (!product) return null;

      const items = cartData[itemId];
      const detailedItems = items.map(({ size, quantity }) => ({
        id: product.id,
        name: product.name,
        size: size,
        quantity: quantity,
        price: product.price,
        mediaUrl: product.mediaUrl,
        altText: product.altText,
        description: product.description,
        shortDescription: product.shortDescription,
      }));

      return detailedItems;
    })
    .flat();

  return detailedCartItems.filter((item) => item !== null);
};

export default function RootLayout({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const loadCartItems = async () => {
    const items = await getDetailedCartItems();
    setCartItems(items);
  };

  useEffect(() => {
    loadCartItems();

    window.addEventListener("storage", loadCartItems);

    return () => {
      window.removeEventListener("storage", loadCartItems);
    };
  }, []);

  return (
    <html lang="en">
      <body className={karla.className}>
        <Navbar logo="/images/logo.webp" cartItems={cartItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
