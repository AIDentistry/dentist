"use client"
import { motion } from "framer-motion"; // Import Framer Motion
import React, { createContext } from "react";
import Link from "next/link";

const Card = ({ title, color, gradient }) => {
  const handleClick = () => {
    console.log(`Clicked on ${title}`);
  };

  return (
    <motion.div
      className={`flex items-center justify-center h-25 w-20 border-0 ${gradient} ${color} p-4 to-[#16001A] rounded-xl`}
      style={{
        height: '8rem',
        width: '8rem'
      }} // Set the size of the card to 100px
      whileHover={{
        cursor: "pointer",
        borderRadius: "18px",
        backdropFilter: "blur(18px)",
        border: '4px solid rgba(255, 255, 255, 0.2)'
      }} // Scale up on hover
      onClick={handleClick} // Handle click within the component
    >
      <h2 className="text-lg font-semibold text-white text-center break-words">
        {title}
      </h2>
    </motion.div>
  )
};

export default Card;
