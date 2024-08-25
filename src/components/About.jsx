import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Replace with your actual logo path

const AboutUs = () => {
  return (
    <div id="About" className="lg:py-16 py-8 bg-gray-700">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo Section */}
          <motion.div
            className="flex justify-center"
            initial={{ x: -180, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={logo} alt="Company Logo" className="w-[550px] h-auto" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="text-center md:text-left flex flex-col justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">About Us</h2>
            <p className="text-lg text-white mb-4">
              Welcome to our car rental service! We are dedicated to providing
              you with the best rental experience possible. Whether you're
              planning a road trip, need a car for a business trip, or just want
              to explore the city, we have a wide range of vehicles to suit your
              needs.
            </p>
            <p className="text-lg text-white mb-4">
              Our fleet includes the latest models of cars, from compact
              vehicles for city driving to spacious SUVs for family trips. We
              take pride in maintaining our cars in top condition, ensuring your
              safety and comfort throughout your journey.
            </p>
            <p className="text-lg text-white">
              With flexible rental plans, affordable prices, and exceptional
              customer service, we're here to make your travel experience smooth
              and enjoyable. Book with us today and hit the road with
              confidence!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
