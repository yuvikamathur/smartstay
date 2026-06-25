function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="text-center mb-14 px-6">
        <p className="text-yellow-600 font-semibold uppercase tracking-[4px]">
          Contact Us
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Book Your Dream Stay
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Have questions or want to make a reservation? Get in touch with us today.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        <div className="bg-[#fffaf3] p-8 rounded-3xl shadow-xl">
          <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>

          <div className="space-y-4 text-lg">
            <p>📍 Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156, India</p>
            <p>📞 +91 9876543210</p>
            <p>📧 kkghosh0099@gmail.com</p>
            <p>🕒 Open 24 Hours</p>
          </div>

          <div className="mt-8">
            <h4 className="font-bold text-xl mb-3">Why Choose SmartStay?</h4>
            <ul className="space-y-2 text-gray-600">
              <li>✅ Luxury Rooms</li>
              <li>✅ Premium Hospitality</li>
              <li>✅ Free WiFi & Parking</li>
              <li>✅ Restaurant & Cafe</li>
            </ul>
          </div>
        </div>

        <form className="bg-white p-8 rounded-3xl shadow-xl">
          <input type="text" placeholder="Your Name" className="w-full border border-gray-300 p-4 rounded-xl mb-4 focus:outline-none focus:border-yellow-500" />
          <input type="email" placeholder="Your Email" className="w-full border border-gray-300 p-4 rounded-xl mb-4 focus:outline-none focus:border-yellow-500" />
          <input type="text" placeholder="Phone Number" className="w-full border border-gray-300 p-4 rounded-xl mb-4 focus:outline-none focus:border-yellow-500" />
          <textarea rows="5" placeholder="Your Message" className="w-full border border-gray-300 p-4 rounded-xl mb-6 focus:outline-none focus:border-yellow-500"></textarea>

          <button className="w-full bg-yellow-500 hover:bg-yellow-600 py-4 rounded-xl font-bold transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;