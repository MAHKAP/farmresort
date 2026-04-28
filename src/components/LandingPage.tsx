import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";


// Testimonials
const testimonials = [
  { text: "Best seafood in Goa! Authentic flavors and great ambiance.", author: "Ananya" },
  { text: "Loved the Goan thali. Perfectly cooked and fresh!", author: "Rahul" },
  { text: "A must-visit farm-resort in Goa. Amazing service.", author: "Priya" },
  { text: "A must-visit farm-resort in Goa. Amazing service.", author: "Mohan" },
];

// Sample Team
const team = [
  { name: "Prashant Naik", position: "Founder and Owner", image: "/farmresort/team/PrashantNaik.jpg" },
  { name: "", position: "Front Office Manager", image: "/farmresort/team/x.jpg" },
  { name: "", position: "Property Manager", image: "/farmresort/team/y.png" },
];

// Menu Data
const menu = {
  Starters: [
    { name: "Goan Prawns Rissóis", price: "₹350" },
    { name: "Veg Spring Rolls", price: "₹250" },
    { name: "Chicken Cafreal Bites", price: "₹400" },
  ],
  "Main Course": [
    { name: "Fish Curry Rice", price: "₹450" },
    { name: "Chicken Xacuti", price: "₹500" },
    { name: "Paneer Tikka Masala", price: "₹420" },
  ],
  Desserts: [
    { name: "Bebinca (Goan Dessert)", price: "₹300" },
    { name: "Serradura", price: "₹280" },
    { name: "Chocolate Mousse", price: "₹250" },
  ],
  Drinks: [
    { name: "Feni Cocktail", price: "₹350" },
    { name: "Fresh Lime Soda", price: "₹150" },
    { name: "Goan Craft Beer", price: "₹400" },
  ],
};

// Values
const values = [
  {
    title: "Nature First",
    description:
      "We believe in preserving and celebrating the beauty of nature. Our spaces are designed to blend seamlessly with the surroundings nature.",
    icon: "🌱",
  },{
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

const LandingPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof menu>("Starters");

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/farmresort/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Escape the Noise, Embrace Nature
          </motion.h1>
          <p className="text-lg md:text-2xl mb-6">
            Experience peaceful farm stay surrounded by lush greenery.
          </p>
          <Button
            component={RouterLink}
            to="/reservetable"
            variant="contained"
            color="secondary"
            size="large"
          >
            Book a Stay
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6 md:flex items-center gap-10">
          <img
            src="/farmresort/Welcome.jpg"
            alt="About farm-resort"
            className="rounded-lg shadow-md md:w-1/2"
          />
          <div className="mt-6 md:mt-0 md:w-1/2">
            <h3 className="text-3xl font-bold text-yellow-700 mb-4">
              Welcome to Our farm-resort
            </h3>
            <p className="text-gray-700 mb-4">
              Welcome to a unique escape where countryside living meets modern comfort. Our farm resort offers premium stays, curated experiences, and a peaceful ambiance that redefines relaxation.
            </p>
            <p className="text-gray-700 mb-4">
              Enjoy a range of refreshing outdoor activities including a swimming pool, rain dance, and open spaces designed for leisure and fun. Our resort is also the perfect venue for hosting special occasions such as birthday parties, family gatherings, receptions, and corporate meetings, all set against a serene natural backdrop.
            </p>
            <p className="text-gray-700">
              With warm hospitality and thoughtfully curated experiences, we invite you to relax, reconnect, and create unforgettable memories with your loved ones.
            </p>
          </div>
        </div>
      </section>

     {/* Our Story */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6 md:flex items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h3 className="text-3xl font-bold text-yellow-700 mb-6">Our Story</h3>
            <p className="mb-4">
              Our farm resort was built with a deep love for the land and a passion for hospitality. Surrounded by greenery and fresh air, we wanted to offer a space where people could step away from the fast pace of city life and reconnect with nature, family, and themselves.
            </p>
            <p className="mb-4">
              Over time, we’ve added thoughtful experiences to make every visit special — from relaxing stays and farm-fresh meals to fun-filled activities like swimming pool, rain dance, and outdoor games. Today, our resort is not just a destination, but a place for celebrations, gatherings, and unforgettable experiences.
            </p>
            <p>
              At the heart of it all is our commitment to warm hospitality and creating a welcoming environment where every guest feels at home.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src="/farmresort/home3.jpg"
            alt="farm-resort"
            className="rounded-lg shadow-lg md:w-1/2"
          />
        </div>
      </section>

    {/* Values Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-yellow-700 mb-12">Our Values</h3>
          <div className="grid md:grid-cols-4 gap-8">
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

      {/* Testimonials */}
      <section className="py-10 bg-gray-200" >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-yellow-700 mb-10">
            What Our Guests Say
          </h3>
          <Slider
            dots
            infinite
            autoplay
            autoplaySpeed={3000}
            speed={600}
            slidesToShow={3}
            slidesToScroll={1}
            swipeToSlide={true}
            centerMode={false}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  centerMode: true,
                  centerPadding: "20px",
                  arrows: false,
                },
              },
            ]}
          >            
            {testimonials.map((t, i) => (
              <div key={i} className="px-4">
                <div className="bg-white shadow-lg rounded-xl p-6 h-full flex flex-col justify-between">
                  <p className="italic text-gray-700 text-sm md:text-base">“{t.text}”</p>
                  <h5 className="mt-4 font-semibold text-gray-900 text-sm md:text-base">
                    – {t.author}
                  </h5>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10 bg-gray-100">
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

      {/* Call To Action */}
      <section className="py-10 bg-[#402702] text-white text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Experience Goa’s Flavors?
        </motion.h3>
        <RouterLink
          to="/reservetable"
          className="inline-block px-6 py-3 bg-white text-yellow-700 font-semibold rounded-full hover:bg-gray-100 transition"
        >
          Reserve Now
        </RouterLink>
      </section>      
    </div>
  );
};

export default LandingPage;
