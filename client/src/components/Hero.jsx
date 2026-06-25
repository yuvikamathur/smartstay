function Hero() {
  return (
    <section
    id="home"
      className="h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/header.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-[6px] text-yellow-400 mb-4">
          Welcome To SmartStay
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Luxury Stay <br />
          For Your Dream Vacation
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-8">
          Experience comfort, elegance, and world-class hospitality at
          affordable prices. Book your perfect stay today.
        </p>

        <div className="flex justify-center gap-4">
          
          <a
  href="#contact"
  className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-lg font-semibold transition"
>
  Book Now
</a>

       <a
  href="#rooms"
  className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition"
>
  Explore Rooms
</a>   
        </div>
      </div>
    </section>
  );
}

export default Hero;