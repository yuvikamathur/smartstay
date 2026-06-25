const rooms = [
  {
    name: "Deluxe Room",
    image: "/images/room1.jpg",
    price: "₹2,999",
    desc: "A cozy room with modern comfort, soft lighting, and all basic amenities.",
    features: ["Free Wi-Fi", "AC Room", "Breakfast"],
  },
  {
    name: "Luxury Suite",
    image: "/images/large.jpg",
    price: "₹1,999",
    desc: "A spacious premium suite designed for a relaxing luxury experience.",
    features: ["King Bed", "Premium View", "Room Service"],
  },
  {
    name: "Family Room",
    image: "/images/small.jpg",
    price: "₹2,499",
    desc: "Perfect for families and group stays with extra space and comfort.",
    features: ["4 Guests", "Large Space", "Smart TV"],
  },
];

function Rooms() {
  return (
    <section className="py-24 bg-[#fffaf3]" id="rooms">
      <div className="text-center mb-14 px-6">
        <p className="text-yellow-600 font-semibold tracking-[4px] uppercase">
          Our Rooms
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Choose Your Perfect Stay
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Beautiful rooms made for comfort, luxury, and peaceful vacation moments.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:-translate-y-3 transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-7">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-bold">{room.name}</h3>
                <span className="text-yellow-500">★★★★★</span>
              </div>

              <p className="text-gray-600 mb-5">{room.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {room.features.map((feature, i) => (
                  <span
                    key={i}
                    className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold text-yellow-600">
                  {room.price}
                  <span className="text-sm text-gray-500 font-normal"> / Night</span>
                </p>

                <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-yellow-500 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Rooms;