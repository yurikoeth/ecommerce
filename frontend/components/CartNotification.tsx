"use client";

import { useCart } from "../context/CartContext";

export default function CartNotification() {
  const { cartNotification } = useCart(); // Get notification state
  console.log("Current cart notification:", cartNotification); // Debugging log

  if (!cartNotification) return null; // Don't render if there's no message

  return (
    <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-out">
      {cartNotification}
    </div>
  );
}
