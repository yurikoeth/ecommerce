"use client";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import { UserProvider } from "../context/UserContext";
import { CartProvider, useCart } from "../context/CartContext";
import "../styles/globals.css";
import CartNotification from "../components/CartNotification";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Newegg Clone</title>
      </head>
      <body className="min-h-screen flex flex-col bg-white text-black dark:text-white">
        <UserProvider>
          <CartProvider>
            <header className="sticky top-0 z-10">
              <Navbar />
            </header>
            <main className="flex-grow">{children}</main>
            <footer>
              <Footer />
            </footer>
            <CartNotification/>
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
