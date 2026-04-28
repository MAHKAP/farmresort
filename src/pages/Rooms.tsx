import React from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const rooms = [
  {
    id: "A01",
    title: "AC Deluxe Room",
    price: "₹2000 / night",
    image: "/farmresort/rooms/acroom1.jpeg",
    features: ["Air Conditioning", "Free WiFi", "2 Guests"],
  },
  {
    id: "N01",
    title: "Non-AC Standard Room",
    price: "₹1500 / night",
    image: "/farmresort/rooms/nonacroom1.jpeg",
    features: ["Garden View", "Fan", "2 Guests"],
  },
];

const Rooms: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section className="relative h-[30vh] bg-yellow-700 bg-center flex items-center justify-center text-center">
        <div className="bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="relative z-10 text-white px-6">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Our Rooms
          </motion.h2>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto">
              Experience cozy and clean rooms with essential modern amenities.
            </p>
        </div>
      </section>

      {/* Room Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          {rooms.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img src={room.image} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-700">{room.title}</h3>
                <p className="text-gray-500 mb-2">{room.price}</p>

                <ul className="text-sm text-gray-600 mb-4">
                  {room.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>

                <RouterLink
                  to={`/book/${room.id}`}
                  className="inline-block px-4 py-2 bg-yellow-700 text-white rounded-full hover:bg-yellow-800"
                >
                  Book Now
                </RouterLink>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rooms;