export default function FeaturedProducts() {
  const products = [
    {
      "id": 1,
      "image": "/cellphone1.png",
      "name": "Sample Phone One",
      "price": "$1,199.99",
    },
    {
      id: 2,
      image: "/laptop1.png",
      name: "Sample Laptop One",
      price: "$1,199.99",
      
    },
    {
      id: 3,
      image: "/keyboard1.png",
      name: "Sample Keyboard One",
      price: "$499.99",
    },  
    {
      id: 4,
      image: "/mouse1.png",
      name: "Sample Mouse One",
      price: "$99.99",
    },
  ];

  return (
    <section className="featured-products px-8">
      <h2 className="text-2xl font-bold text-center mb-6">Featured</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          className="product-card dark:text-white rounded-lg"
          key={product.id}
        >
          <div
            className="h-60 rounded-md mb-4 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="h-24"> {/* Static height applied here */}
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700 dark:text-white">{product.price}</p>
            <p className="text-gray-500 text-sm mt-2">{product.description}</p>
          </div>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md">
            Add to Cart
          </button>
        </div>
      ))}
      </div>
    </section>
  );
}
