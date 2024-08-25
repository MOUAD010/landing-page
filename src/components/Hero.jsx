import React from "react";
import { motion } from "framer-motion";
import back_ground_image from "../assets/car-is-driving-road-night-forest.jpg";

const Hero = () => {
  return (
    <div
      className="relative h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url('${back_ground_image}')` }}
    >
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full bg-black/50">
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-8 md:gap-x-12">
          {/* Left Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              Rent the Best Cars
            </h1>
          </motion.div>

          {/* Right Text */}
          <motion.div
            className="flex-1 text-center md:text-right"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              For Your Next Adventure
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
