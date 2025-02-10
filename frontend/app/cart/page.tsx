"use client";

import { useCart, } from "../../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <div className="container mx-auto px-6 lg:px-20 py-12">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty. <Link href="/products" className="text-blue-500">Shop now</Link></p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
              <p className="w-1/3">{item.name}</p>
              <p className="text-gray-500">${item.price.toFixed(2)}</p>

              {/* Quantity Selector */}
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-16 border text-center"
              />

              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </div>
          ))}

          {/* ✅ Add "Clear Cart" Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={clearCart}
              className="w-1/6 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Remove All Items
            </button>
          </div>
          <div className="mt-6 text-right">
            <h3 className="text-xl font-bold">Total: $
              {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </h3>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
