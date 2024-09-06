"use client";
import { useState, useEffect } from "react";

export const saveToCart = (cart) => {
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("storage"));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }
};

export const getFromCart = () => {
  if (typeof window !== "undefined") {
    try {
      return JSON.parse(window.localStorage.getItem("cart")) || {};
    } catch (error) {
      console.error("Error getting cart from localStorage:", error);
      return {};
    }
  }
  return {};
};

export const addItemToCart = (itemId, quantity, size) => {
  const cart = getFromCart();
  if (!size) {
    console.error("Size not provided");
    return;
  }
  if (!cart[itemId]) {
    cart[itemId] = [];
  }

  const existingItem = cart[itemId].find((item) => item.size === size);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart[itemId].push({ size, quantity });
  }

  saveToCart(cart);
};

export const removeItemFromCart = (itemId, size) => {
  const cart = getFromCart();

  if (cart[itemId]) {
    const itemIndex = cart[itemId].findIndex((item) => item.size === size);

    if (itemIndex !== -1) {
      if (cart[itemId][itemIndex].quantity === 1) {
        cart[itemId] = cart[itemId].filter((item) => item.size !== size);
      } else {
        cart[itemId][itemIndex].quantity -= 1;
      }

      if (cart[itemId].length === 0) {
        delete cart[itemId];
      }

      saveToCart(cart);
    }
  }
};

export const updateCartItemQuantity = (itemId, size, newQuantity) => {
  const cart = getFromCart();
  if (cart[itemId]) {
    const item = cart[itemId].find((item) => item.size === size);
    if (item) {
      if (newQuantity > 0) {
        item.quantity = newQuantity;
      } else {
        cart[itemId] = cart[itemId].filter((item) => item.size !== size);
        if (cart[itemId].length === 0) {
          delete cart[itemId];
        }
      }
      saveToCart(cart);
    }
  }
};

export const getCartTotalCount = () => {
  const cart = getFromCart();
  return Object.values(cart).reduce(
    (sum, items) =>
      sum + items.reduce((itemSum, item) => itemSum + item.quantity, 0),
    0
  );
};

export const useCart = () => {
  const [cart, setCart] = useState(() => getFromCart());

  useEffect(() => {
    setCart(getFromCart());
  }, []);

  const addOrUpdateItem = (itemId, size, quantity) => {
    updateCartItemQuantity(itemId, size, quantity);
    setCart(getFromCart());
  };

  const removeItem = (itemId, size) => {
    removeItemFromCart(itemId, size);
    setCart(getFromCart());
  };

  const clearCart = () => {
    saveToCart({});
    setCart({});
  };

  return {
    cart,
    addOrUpdateItem,
    removeItem,
    clearCart,
    totalCount: getCartTotalCount(),
  };
};

export const getCartFromLocalStorage = () => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : {};
};
