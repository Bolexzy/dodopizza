"use client";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const StoryCard = ({ image }) => {
  return (
    <motion.div
      className="w-[160px] h-[200px] md:w-[200px] md:h-[250px] lg:w-[205px] lg:h-[255px] xl:w-[250px] xl:h-[300px] cursor-pointer bg[#f86400] ring ring-offset-base-100 ring-offset-2 lg:ring-offset-4 hover:ring-offset-1 hover:translate-y-4 transition-all duration-300 ease-in-out ring-[#c96725] rounded-2xl active:ring-0"
      initial={{ opacity: 0, transform: "translateY(50px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      style={
        {
          // transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }
      }
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
        className="rounded-2xl active:scale-95 transition-all duration-300 ease-in-out"
      ></div>
    </motion.div>
  );
};

export default StoryCard;
