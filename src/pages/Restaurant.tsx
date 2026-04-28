import React from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import Slider from "react-slick";

// Popular Dishes
const dishes = [
  { image: "/farmresort/dishes/dish1.jpeg", title: "Goan Fish Curry" },
  { image: "/farmresort/dishes/dish2.jpeg", title: "Prawns Rava Fry" },
  { image: "/farmresort/dishes/dish3.jpeg", title: "Chicken Xacuti" },
  { image: "/farmresort/dishes/dish3.jpeg", title: "Mutton Masala" },
  { image: "/farmresort/dishes/dish4.jpeg", title: "Bebinca Dessert" },
];

const Restaurant: React.FC = () => {
  return (
    <div className="font-sans bg-amber-50 text-amber-900">

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
            Restaurant Menu
          </motion.h2>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto">
              Freshly prepared meals with a variety of local and multi-cuisine options.
            </p>
        </div>
      </section>

      {/* Menu Container */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Card */}
          {[
            {
              title: "🏡 Entry & Stay",
              items: [
                "Day Entry – ₹250 / head",
                "AC Room – ₹1500",
                "Non-AC Room – ₹1000",
                "Extra Mattress – ₹500",
              ],
            },
            {
              title: "🐟 Goan Fish Thali",
              items: [
                "Kingfish – ₹280",
                "Chonak – ₹250",
                "Modso – ₹230",
                "Bangda – ₹180",
              ],
            },
            {
              title: "🍗 Chicken Specials",
              items: ["Chicken Xacuti Thali – ₹250"],
            },
            {
              title: "🍖 Chicken À La Carte",
              items: [
                "Chicken Cafreal",
                "Chicken Chilli",
                "Chicken Dry Fry",
                "Chicken Pakoda",
                "Popcorn Chicken",
              ],
            },
            {
              title: "🌿 Veg Thali – ₹150",
              items: [
                "Rice & Roti",
                "Dal Tadka",
                "Farm Bhaji",
                "Pickle, Papad, Solkadi",
              ],
            },
            {
              title: "🍞 Breads & Local Bites",
              items: [
                "Pav / Roti / Bhakri",
                "Paratha / Bread",
                "Gavne / Poli",
              ],
            },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-amber-100 to-amber-200 
                         border-2 border-amber-700 
                         rounded-2xl p-6 
                         shadow-lg hover:shadow-2xl transition"
            >
              <h2 className="text-xl font-bold text-amber-800 mb-4">
                {section.title}
              </h2>

              <ul className="space-y-2 text-sm">
                {section.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>
      </section>

    {/* Popular Dishes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-yellow-700 mb-10">
            Our Popular Dishes
          </h3>
          <Slider
            infinite
            autoplay
            autoplaySpeed={0}
            speed={3000}
            cssEase="linear"
            slidesToShow={3}
            slidesToScroll={1}
            arrows={false}
            pauseOnHover
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 640, settings: { slidesToShow: 1 } },
            ]}
          >
            {dishes.map((dish, i) => (
              <div key={i} className="px-4">
                <div className="rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-64 object-cover"
                  />
                  <h4 className="mt-2 font-semibold text-gray-800">
                    {dish.title}
                  </h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

{/* Call To Action */}
      <section className="py-10 bg-[#402702] text-white text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          From Our Farm to Your Plate 🌾
        </motion.h3>
        <p className="max-w-2xl mx-auto mb-6">
          Fresh ingredients, local flavors, and authentic taste crafted with love.
        </p>
        <RouterLink
          to="/reservetable"
          className="inline-block px-6 py-3 bg-white text-yellow-700 font-semibold rounded-full hover:bg-gray-100 transition"
        >
          Reserve Your Table
        </RouterLink>
      </section>          
    </div>
  );
};

export default Restaurant;