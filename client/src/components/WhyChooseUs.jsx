const features = [
  {
    icon: "🏨",
    title: "Luxury Rooms",
    desc: "Elegant rooms designed for comfort and relaxation.",
  },
  {
    icon: "📶",
    title: "Free Wi-Fi",
    desc: "High-speed internet available throughout the property.",
  },
  {
    icon: "🍽️",
    title: "Fine Dining",
    desc: "Delicious meals prepared by experienced chefs.",
  },
  {
    icon: "🚗",
    title: "Free Parking",
    desc: "Safe and secure parking for all guests.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="text-center mb-14 px-6">
        <p className="text-yellow-600 font-semibold uppercase tracking-[4px]">
          Why Choose Us
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Experience Comfort Like Never Before
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We provide exceptional hospitality, luxury accommodation,
          and unforgettable experiences for every guest.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#fffaf3] p-8 rounded-3xl shadow-lg text-center hover:-translate-y-3 hover:shadow-2xl transition duration-300"
          >
            <div className="text-5xl mb-5">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;