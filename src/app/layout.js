import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "E-commerce Storefront",
  description: "https://github.com/ramstedt/e-com-storefront",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Navbar logo="/images/logo.webp" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
