import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import Slider from "react-slick";

// Define menu item type
type MenuItem = {
  name: string;
  price: string;
  description: string;
};

// Define menu categories
type MenuCategory = "Starters" | "Main Course" | "Desserts" | "Beverages";

const menuData: Record<MenuCategory, MenuItem[]> = {
  Starters: [
    {
      name: "Goan Prawns Rava Fry",
      price: "₹450",
      description: "Golden fried prawns coated in semolina, served with tangy Goan chutney.",
    },
    {
      name: "Chicken Cafreal Bites",
      price: "₹380",
      description: "Tender chicken marinated in traditional Cafreal masala and shallow fried.",
    },
    {
      name: "Veg Pakoras",
      price: "₹250",
      description: "Seasonal vegetables dipped in gram flour batter and deep-fried.",
    },
  ],
  "Main Course": [
    {
      name: "Goan Fish Curry & Rice",
      price: "₹550",
      description: "Spicy coconut-based fish curry served with steamed rice.",
    },
    {
      name: "Chicken Xacuti",
      price: "₹480",
      description: "Richly spiced chicken curry with roasted coconut and aromatic spices.",
    },
    {
      name: "Vegetarian Thali",
      price: "₹350",
      description: "Assorted vegetarian delicacies served with rice, dal, and chapati.",
    },
  ],
  Desserts: [
    {
      name: "Bebinca",
      price: "₹220",
      description: "Traditional Goan layered dessert made with coconut milk and ghee.",
    },
    {
      name: "Coconut Caramel Pudding",
      price: "₹200",
      description: "Creamy pudding infused with coconut milk and caramelized sugar.",
    },
    {
      name: "Feni Chocolate Mousse",
      price: "₹280",
      description: "Classic chocolate mousse infused with Goan cashew Feni.",
    },
  ],
  Beverages: [
    {
      name: "Kokum Sherbet",
      price: "₹180",
      description: "Refreshing drink made with kokum fruit, cumin, and sugar.",
    },
    {
      name: "Tender Coconut Water",
      price: "₹120",
      description: "Fresh tender coconut served chilled.",
    },
    {
      name: "Feni Cocktail",
      price: "₹350",
      description: "Signature Goan cashew Feni cocktail with a tropical twist.",
    },
  ],
};

// Sample Dishes
const dishes = [
  { image: "/farm-resort/dishes/dish1.jpeg", title: "Goan Fish Curry" },
  { image: "/farm-resort/dishes/dish2.jpeg", title: "Prawns Rava Fry" },
  { image: "/farm-resort/dishes/dish3.jpeg", title: "Chicken Xacuti" },
  { image: "/farm-resort/dishes/dish4.jpeg", title: "Bebinca Dessert" },
];

const Menu: React.FC = () => {
  const categories = Object.keys(menuData) as MenuCategory[];
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(categories[0]);

  return (
    <div className="font-sans text-gray-800">
      {/* Filter Bar */}
      <div className="bg-white-700 py-6">
        <div className="container mx-auto flex justify-center gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2 py-1 rounded-full text-white font-semibold transition ${
                activeCategory === cat
                  ? "bg-yellow-900 shadow-lg"
                  : "bg-yellow-600 hover:bg-yellow-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Section */}
      <section className="py-2 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h3
            key={activeCategory}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-yellow-700 mb-8 text-center"
          >
            {activeCategory}
          </motion.h3>

          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
            <ul className="divide-y divide-gray-200">
              {menuData[activeCategory].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="py-4 flex justify-between items-start"
                >
                  <div>
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <span className="text-yellow-700 font-bold text-lg">
                    {item.price}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

            {/* Signature Dishes Section */}
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
      <section className="py-16 bg-yellow-700 text-white text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          From Our Farm to Your Plate
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

export default Menu;
