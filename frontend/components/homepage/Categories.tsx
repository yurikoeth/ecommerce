import Link from "next/link";
import { CategoryData } from "@/data";

export default function Categories() {
  return (
    <section className="categories grid grid-cols-2 md:grid-cols-4 gap-4 px-8 bg-white">
      {CategoryData.map((category) => (
        <div
          className="category-card relative bg-gray-100 p-6 text-center rounded-lg flex flex-col items-center h-64 justify-center bg-cover bg-center bg-no-repeat shadow-lg hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: `url(${category.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          key={category.name}
        >
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-80 rounded-lg"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-xl text-white font-semibold px-2 py-1 rounded">
              {category.name}
            </h2>
            <p className="text-white mt-2 px-2 py-1 rounded">
              Explore the latest in {category.name.toLowerCase()}
            </p>
            <Link href={`/products?category=${category.selectedCategory}`}>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Browse
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
