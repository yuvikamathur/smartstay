const images = [
  "/images/recep.jpg",
  "/images/room1.jpg",
  "/images/header.jpg",
  "/images/large.jpg",
  "/images/small.jpg",
  "/images/service.jpg",
];

function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="text-center mb-14 px-6">
        <p className="text-yellow-600 font-semibold uppercase tracking-[4px]">
          Gallery
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Explore SmartStay
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Take a glimpse of our luxurious rooms, elegant interiors,
          and unforgettable hospitality experience.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl shadow-xl group"
          >
            <img
              src={img}
              alt="Gallery"
              className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;