function MapSection() {
  return (
    <section className="py-20 bg-[#fffaf3]">
      <div className="text-center mb-10 px-6">
        <p className="text-yellow-600 font-semibold uppercase tracking-[4px]">
          Location
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Find Us Easily
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <iframe
          title="SmartStay Location"
          src="https://www.google.com/maps?q=Beside%20Barshal%20Water%20Tank,%20Manpur,%20Barhanti,%20West%20Bengal%20723156&output=embed"
          className="w-full h-[450px] rounded-3xl shadow-2xl border-0"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default MapSection;