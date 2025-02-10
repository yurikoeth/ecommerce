"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Cart Context
const CartContext = createContext(null);

// Cart Provider Component
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartNotification, setCartNotification] = useState(""); // New state for notification

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    // Show "Added to Cart" notification
    setCartNotification(`${product.name} added to cart!`);
    console.log("Cart notification set:", `${product.name} added to cart!`); // Debugging lo
    
    // Hide the notification after 3 seconds
    setTimeout(() => {
      setCartNotification("");
    }, 3000);
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); // Clear local storage
    setCartNotification("Cart has been emptied!"); // Show notification
    setTimeout(() => setCartNotification(""), 3000);
  };
  // Function to update quantity
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, cartNotification, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom Hook to use the Cart Context
export function useCart() {
  return useContext(CartContext);
}
