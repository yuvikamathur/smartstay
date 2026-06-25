function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">
            SmartStay
          </h2>

          <p className="text-gray-400">
            Experience luxury, comfort, and unforgettable hospitality
            with SmartStay Hotels.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-yellow-500 cursor-pointer">Home</li>
            <li className="hover:text-yellow-500 cursor-pointer">Rooms</li>
            <li className="hover:text-yellow-500 cursor-pointer">Services</li>
            <li className="hover:text-yellow-500 cursor-pointer">Gallery</li>
            <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <div className="space-y-2 text-gray-400">
           <p>
  📍 Beside Barshal Water Tank, Manpur, Barhanti,
  West Bengal 723156, India
</p> 
            <p>📞 +91 9007062180</p>
            <p>📧 kkghosh0099@gmail.com</p>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
        © 2026 SmartStay. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;