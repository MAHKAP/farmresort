import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Menu from './pages/Menu';
import Restaurant from './pages/Restaurant';
import Services from './pages/Services';
import Events from './pages/Events';
import Contact from './pages/Contact';
import ReserveTable from './pages/ReserveTable';
import Blog from './pages/Blog';
import BlogDetail from "./pages/BlogDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from './components/ScrollToTop';
import Rooms from "./pages/Rooms";
import RoomBooking from "./pages/RoomBooking";


const App: React.FC = () => {
  return (
    <Router basename="/farmresort">
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservetable" element={<ReserveTable />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/book/:roomId" element={<RoomBooking />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
          <FloatingWhatsApp/>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;