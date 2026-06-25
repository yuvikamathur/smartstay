function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      review:
        "Amazing stay! Rooms were clean, comfortable, and the staff was very helpful.",
    },
    {
      name: "Priya Verma",
      review:
        "One of the best hotel experiences. Beautiful rooms and excellent service.",
    },
    {
      name: "Amit Kumar",
      review:
        "Highly recommended! Great location, delicious food, and luxurious ambiance.",
    },
  ];

  return (
    <section className="py-24 bg-[#fffaf3]">
      <div className="text-center mb-14 px-6">
        <p className="text-yellow-600 font-semibold uppercase tracking-[4px]">
          Testimonials
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          What Our Guests Say
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Thousands of happy guests trust SmartStay for memorable stays and
          premium hospitality.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <div className="text-yellow-500 text-xl mb-4">
              ★★★★★
            </div>

            <p className="text-gray-600 mb-6 italic">
              "{item.review}"
            </p>

            <h3 className="font-bold text-lg">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;