import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const RoomBooking: React.FC = () => {
  const { roomId } = useParams();

  const [form, setForm] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Booking Submitted!");
  };

  return (
    <div className="font-sans">

      {/* Hero */}
      <section className="h-[25vh] flex items-center justify-center bg-gray-700 text-white">
        <h2 className="text-3xl font-bold">Book Room {roomId}</h2>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Guest Name"
              className="w-full p-3 border rounded"
              onChange={handleChange}
              required
            />

            {/* Calendar Picker */}
            <input
              type="date"
              name="checkIn"
              className="w-full p-3 border rounded"
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="checkOut"
              className="w-full p-3 border rounded"
              onChange={handleChange}
              required
            />

            <select
              name="guests"
              className="w-full p-3 border rounded"
              onChange={handleChange}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
            </select>

            <button className="w-full bg-yellow-700 text-white py-3 rounded-full hover:bg-yellow-800">
              Confirm Booking
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default RoomBooking;