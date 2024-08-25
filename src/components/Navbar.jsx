import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className=" flex justify-center ">
      {" "}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="fixed mt-4 top-0 mb-4  lg:top-0  transform -translate-x-1/2 bg-white/20 backdrop-blur-lg rounded-lg px-8 py-4 z-50"
      >
        <ul className="flex space-x-8 text-white font-semibold">
          <li>
            <a href="#About" className="hover:text-cyan-400">
              About
            </a>
          </li>
          <li>
            <a href="#Gallery" className="hover:text-cyan-400">
              Top Ranted Cars
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-cyan-400">
              Contact
            </a>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
};

export default Navbar;
