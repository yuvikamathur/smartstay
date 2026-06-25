function Stats() {
  const stats = [
    { number: "50+", title: "Luxury Rooms" },
    { number: "10K+", title: "Happy Guests" },
    { number: "4.9★", title: "Guest Rating" },
    { number: "24/7", title: "Service Support" },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
        {stats.map((item, index) => (
          <div key={index}>
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-500">
              {item.number}
            </h2>
            <p className="mt-3 text-gray-300">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;