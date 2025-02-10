export default function ProductInfo({ selectedCategory }) {
  return (
    <div className="rounded-lg mb-8 w-1/2">
      <h1 className="text-xl font-bold">{selectedCategory}</h1>
      <hr className="border-t border-gray-300 mt-2 mb-4 w-1/2" />
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        This is your category description. It’s a great place to tell customers what this category is about, connect with your audience, and draw attention to your products.
      </p>
    </div>
  );
}
