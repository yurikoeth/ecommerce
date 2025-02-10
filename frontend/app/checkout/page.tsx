"use client";

import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Details:", { cart, formData });

    // Simulating order placement
    alert("Order Placed Successfully!");
    clearCart();
    router.push("/");
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="container mx-auto px-6 lg:px-20 py-12">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="border p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b py-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                <p className="w-1/3">{item.name}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
                <p>x {item.quantity}</p>
              </div>
            ))}
            <h3 className="text-xl font-bold mt-6">Total: ${totalAmount}</h3>
          </div>

          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="border p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-bold mb-4">Shipping & Payment</h2>

            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-4"
            />

            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-4"
            />

            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-4"
            />

            <label className="block text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-4"
            />

            <label className="block text-sm font-medium">ZIP Code</label>
            <input
              type="text"
              name="zip"
              required
              value={formData.zip}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-4"
            />

            <label className="block text-sm font-medium">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              required
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-4"
            />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  required
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mb-4"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  required
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mb-4"
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Place Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
