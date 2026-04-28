import React from "react";
import { motion } from "framer-motion";

// Sample Team
const team = [
  { name: "M. K. Shah", position: "Founder and Owner", image: "/farm-resort/team/team1.jpg" },
  { name: "N. D. Shetty", position: "Front Office Manager", image: "/farm-resort/team/team2.jpg" },
  { name: "Pawan Chaddha", position: "Head Chef", image: "/farm-resort/team/head_chef.png" },
];

// Values
const values = [
  {
    title: "Quality & Freshness",
    description:
      "Using fresh, locally sourced ingredients. Maintaining consistency in taste and presentation.",
    icon: "🍽️",
  },
  {
    title: "Hospitality & Warmth",
    description:
      "Staying true to Goa’s tradition while adding a modern twist. Every guest is family here.",
    icon: "🤝",
  },
  {
    title: "Cleanliness & Hygiene",
    description:
      "Maintaining high standards of food safety and farm-resort hygiene. Trust in every meal served.",
    icon: "✨",
  },
];

// Chef's Specials Videos
const specials = [
  { id: 1, src: "/farm-resort/videos/seafood1.mp4", title: "Goan Seafood Platter" },
  { id: 2, src: "/farm-resort/videos/xacuti1.mp4", title: "Chicken Xacuti" },
  { id: 3, src: "/farm-resort/videos/dessert3.mp4", title: "Feni-Infused Dessert" },
  { id: 3, src: "/farm-resort/videos/dessert1.mp4", title: "Favorite Dessert" },
];

const About: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center text-center bg-gray-500 bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-white px-6">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            About Us
          </motion.h2>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            Every great meal begins with a story, and so does <span className="text-yellow-500">Spice by the Bay</span>.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:flex items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h3 className="text-3xl font-bold text-yellow-700 mb-6">Our Story</h3>
            <p className="mb-4">
              Our journey started with a dream to bring people together over food that feels like home, yet surprises with new flavors.
              Inspired by Goa’s rich culinary heritage, from seafood curries simmered in clay pots to freshly baked village bread.
            </p>
            <p className="mb-4">
              In 2009, Spice by the Bay opened its doors as a family-run eatery. Today, it has grown into a warm, welcoming space where
              families, friends, and travelers enjoy authentic Goan cuisine with a modern touch.
            </p>
            <p>
              We believe food is about sharing, celebrating, and creating memories. Each dish is crafted with love, fresh ingredients,
              and the soul of Goan hospitality.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src="/farm-resort/home2.jpg"
            alt="farm-resort"
            className="rounded-lg shadow-lg md:w-1/2"
          />
        </div>
      </section>

      {/* Chef’s Special Section (Video Slider) */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-yellow-700 mb-12">Chef’s Specials</h3>
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory">
            {specials.map((item) => (
              <motion.div
                key={item.id}
                className="flex-shrink-0 w-80 snap-center bg-white rounded-lg shadow-md overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <video
                  src={item.src}
                  controls
                  className="w-full h-56 object-cover"
                  preload="metadata"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-yellow-700 mb-12">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-yellow-700 mb-12">Meet Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-gray-600">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
