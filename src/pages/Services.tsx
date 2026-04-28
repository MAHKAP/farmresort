import React from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const services = [
  {
    title: "Corporate & Group Bookings",
    description:
      "Host corporate meetings, team outings, and group events in a peaceful natural setting. Ideal for team bonding, workshops, and offsite gatherings.",
    image: "/farmresort/services/corporate.jpg",
  },{
    title: "Catering Services",
    description:
      "Delight in freshly prepared meals with a variety of local and multi-cuisine options. Whether it’s a family meal or a large gathering, our catering ensures quality, taste, and satisfaction.",
    image: "/farmresort/services/catering1.jpg",
  },
  {
    title: "Event Hosting",
    description:
      "Celebrate life’s special moments with us. From birthday parties and receptions to anniversaries and private celebrations, we provide the perfect venue and support to make your event unforgettable.",
    image: "/farmresort/services/event.jpg",
  },
  {
    title: "Swimming Pool Access",
    description:
      "Relax and refresh in our well-maintained swimming pool — perfect for both adults and kids to unwind and enjoy. Also add fun to your stay with our energetic rain dance setup.",
    image: "/farmresort/services/swimming.jpg",
  },
  {
    title: "Outdoor Games & Activities",
    description:
      "Enjoy a variety of outdoor games and open spaces designed for recreation, relaxation, and bonding with friends and family.",
    image: "/farmresort/services/outdoor.jpg",
  },
  {
    title: "Comfortable Stay",
    description:
      "Experience cozy and clean rooms with essential modern amenities, ensuring a peaceful and comfortable stay close to nature.",
    image: "/farmresort/services/stay.jpg",
  },
];

const Services: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[30vh] bg-yellow-700 bg-center flex items-center justify-center text-center">
        <div className="bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="relative z-10 text-white px-6">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            Beyond food, we create experiences worth remembering
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-yellow-700 text-center mb-10">
            What We Offer
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full md:w-1/3 h-56 object-cover"
                />
                <div className="p-6 flex-1">
                  <h4 className="text-2xl font-semibold mb-3 text-yellow-700">
                    {service.title}
                  </h4>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-[#402702] text-white text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-4">
            Plan Your Stay or Event Today
          </h3>
          <p className="text-lg mb-6 text-gray-300">
            Whether it's catering, event hosting, or day trip, we’re here to make your occasion special.
          </p>
          <RouterLink
                    to="/contact"
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full font-semibold transition"
                  >
                    Contact Us
                  </RouterLink>

          
        </div>
      </section>
    </div>
  );
};

export default Services;
