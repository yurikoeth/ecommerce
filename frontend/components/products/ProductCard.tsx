import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart(); // Get cart function

  return (
      <div className="w-60 p-4 flex flex-col rounded-lg">
        <Link href={`/products/${product.id}`} className="block">
        <div className="w-full aspect-w-4 aspect-h-3 rounded overflow-hidden mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Product details container */}
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-md font-bold text-gray-800 dark:text-white">
              {product.name}
            </h3>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {product.price}
            </p>
            <p className="text-xs text-green-500">In Stock</p>
            <p className="text-xs text-gray-500">Free Shipping</p>
          </div>
        </div>
        </Link>
        {/* Add to Cart button */}
        <button 
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
  );
}
