function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-3xl font-extrabold text-yellow-600">
          Smart<span className="text-black">Stay</span>
        </a>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li><a href="#home" className="hover:text-yellow-600">Home</a></li>
          <li><a href="#rooms" className="hover:text-yellow-600">Rooms</a></li>
          <li><a href="#services" className="hover:text-yellow-600">Services</a></li>
          <li><a href="#gallery" className="hover:text-yellow-600">Gallery</a></li>
          <li><a href="#contact" className="hover:text-yellow-600">Contact</a></li>
        </ul>

        <a
          href="#contact"
          className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}

export default Navbar;