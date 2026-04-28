import React, { useState } from "react";
import { motion } from "framer-motion";

const ReserveTable: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reservation Details:", formData);
    alert("Your reservation request has been submitted!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      requests: "",
    });
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[30vh] bg-gray-500 bg-center flex items-center justify-center text-center">
        <div className="bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="relative z-10 text-white px-6">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Reserve Your Table
          </motion.h2>
          <p className="text-lg md:text-xl">
            Book your dining experience with us in just a few clicks
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-yellow-700 text-center mb-8"
          >
            Book a Table
          </motion.h3>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-400 shadow-lg rounded-xl p-8 space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-700"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-700"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-700"
              />
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-700"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Time</label>
                <input
                  type="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-700"
                />
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-gray-700 mb-2">Guests</label>
              <input
                type="number"
                name="guests"
                min="1"
                required
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-700"
              />
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-gray-700 mb-2">
                Special Requests
              </label>
              <textarea
                name="requests"
                value={formData.requests}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-700"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-yellow-700 text-white font-semibold rounded-full hover:bg-yellow-800 transition"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ReserveTable;
