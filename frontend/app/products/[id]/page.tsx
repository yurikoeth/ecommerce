"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useCart } from "../../../context/CartContext";
import{Phones, Computers, Keyboards, Mice} from "@/data"; 

const products = [
  Phones, Computers, Keyboards, Mice
];

export default function ProductPage() {
  const { id } = useParams(); // Get product ID from URL
  const { addToCart } = useCart(); // Get cart function
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulating fetching product by ID (Replace with real API call)
    const foundProduct = products.flat().find((p) => p.id === id);

    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <p className="text-center text-gray-500">Product not found.</p>;
  }

  return (
    <div className="container mx-auto px-6 lg:px-20 py-12">
      <nav className="text-gray-500 text-sm mb-4">
        Home / <span className="text-black">Products</span> / {product.name}
      </nav>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full" />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-500 text-sm">SKU: {product.sku}</p>
          <p className="text-2xl font-semibold mt-2"> ${product.price.toFixed(2)}
          </p>


          <div className="mt-4">
            <span className="text-gray-700">Color: {product.color}</span>
          </div>

          <button 
            onClick={() => addToCart(product)}
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Add to Cart
          </button>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">PRODUCT INFO</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="mt-6 border-t pt-4">
            <h3 className="text-lg font-semibold cursor-pointer">RETURN & REFUND POLICY</h3>
            <p className="text-gray-600">Details about returns and refunds go here.</p>
          </div>
          <div className="mt-4 border-t pt-4">
            <h3 className="text-lg font-semibold cursor-pointer">SHIPPING INFO</h3>
            <p className="text-gray-600">Shipping information goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
