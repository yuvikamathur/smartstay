function Services() {
  return (
    <section id="services" className="py-24 bg-[#fffaf3]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6">

        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="/images/service.jpg"
            alt="Services"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        <div>
          <p className="text-yellow-600 font-semibold uppercase tracking-[4px] mb-3">
            Premium Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need For A Perfect Stay
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Enjoy luxury hospitality with premium facilities designed
            to make your stay comfortable, relaxing, and memorable.
          </p>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow">
              ✅ 24/7 Room Service
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              ✅ Free High-Speed WiFi
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              ✅ Restaurant & Cafe
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              ✅ Airport Pickup
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              ✅ Laundry Service
            </div>
          </div>

          <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-full font-semibold transition">
            Discover More
          </button>
        </div>

      </div>
    </section>
  );
}

export default Services;