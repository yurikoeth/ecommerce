export default function Hero() {
  return (
    <section className="relative hero bg-[url('/hero_banner.webp')] bg-cover bg-center text-white h-96 flex items-center justify-center">
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center p-6">
        <h1 className="text-4xl font-bold">Exclusive Deals on Electronics!</h1>
        <p className="mt-4">Limited time offer on the latest gadgets. Don’t miss out!</p>
        <button className="mt-6 px-6 py-2 bg-yellow-500 text-black rounded-md">
          Shop Now
        </button>
      </div>
    </section>
  );
}
