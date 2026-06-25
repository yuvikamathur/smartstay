function BookingBar() {
  return (
    <section className="bg-white py-0 px-6">
      <div className="max-w-6xl mx-auto -mt-14 relative z-20 bg-white rounded-3xl shadow-2xl p-6 grid md:grid-cols-4 gap-4">
        <input
          type="date"
          className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-yellow-500"
        />

        <input
          type="date"
          className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-yellow-500"
        />

        <select className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-yellow-500">
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4 Guests</option>
        </select>

        <button className="bg-yellow-500 hover:bg-yellow-600 rounded-xl font-bold transition">
          Check Availability
        </button>
      </div>
    </section>
  );
}

export default BookingBar;