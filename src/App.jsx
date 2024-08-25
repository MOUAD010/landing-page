import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="bg-gray-700 w-full h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
