import React from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

// Sample Events Data
const events = [
  
  {
    title: "Day Entry Package",
    date: "October 15, 2025",
    description:
      "Enjoy access to our swimming pool, rain dance setup, and spacious outdoor areas where you can unwind and reconnect with nature.",
    image: "/farmresort/events/dayentry.jpg",
  },
  {
    title: "Mutton Masala Jumbo Pack",
    date: "October 25, 2025",
    description:
      "संथपणे शिजवलेले रसरशीत मटण आणि घरगुती खड्या मसाल्यांचा अस्सल गावरान बेत. कुटुंबासोबत सुसेगाद जेवणाचा आनंद घेण्यासाठी आमचा खास 'जम्बो पॅक'.",
    image: "/farmresort/events/muttonmasala.jpg",
  },
  {
    title: "Chulivarche Jevan",
    date: "October 5, 2025",
    description:
      "चुलीवरचे जेवण: मातीचा सुगंध, लाकडाची ऊब आणि अस्सल गोमंतकीय चव. Smoky, Authentic, Soulful. Experience the lost art of the Chul.",
    image: "/farmresort/events/chulivarache.jpg",
  },
  {
    title: "Goan Seafood",
    date: "October 5, 2025",
    description:
      "A grand celebration of Goa’s coastal flavors. Enjoy the seafood platters, Goan music, and live cooking counters.",
    image: "/farmresort/events/seafood.jpg",
  },
];

const pastEvents = [
  { image: "/farmresort/events/event1.jpg", title: "Event 1" },
  { image: "/farmresort/events/event2.jpg", title: "Event 2" },
  { image: "/farmresort/events/event3.jpg", title: "Event 3" },
  { image: "/farmresort/events/event4.jpg", title: "Event 4" },
  { image: "/farmresort/events/event5.jpg", title: "Event 5" },
  { image: "/farmresort/events/event6.jpg", title: "Event 6" },
  { image: "/farmresort/events/event7.jpg", title: "Event 7" },
  { image: "/farmresort/events/event8.jpg", title: "Event 8" },
];

const Events: React.FC = () => {
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
            Our Packages
          </motion.h2>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto">
              Experience unforgettable events at <span className="text-yellow-500">P.K. Farm & Resort</span>
            </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-yellow-700 text-center mb-12"
          >
            What’s Happening
          </motion.h3>

          <div className="grid gap-12 md:grid-cols-3">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-yellow-700 mb-2">
                    {event.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="px-4 py-2 bg-yellow-700 text-white rounded-full hover:bg-yellow-800 transition">
                    Reserve Your Seat
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

	{/* Past Events Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-yellow-700 text-center mb-10">
            Past Events
          </h3>
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="min-w-[250px] bg-gray-100 rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <p className="font-semibold">{event.title}</p>
                </div>
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
          Host Your Own Event
        </motion.h3>
        <p className="text-lg mb-6 text-gray-300">
          Looking for the perfect place to host a private party, wedding dinner,
          or corporate gathering?
        </p>
        <RouterLink
          to="/reservetable"
          className="inline-block px-6 py-3 bg-white text-yellow-700 font-semibold rounded-full hover:bg-gray-100 transition"
        >
          Enquire Now
        </RouterLink>
      </section>
    </div>
  );
};

export default Events;
