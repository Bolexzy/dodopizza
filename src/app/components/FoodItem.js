"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const FoodItem = ({ title, summary, price, image }) => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] hover:translate-y-2 transition-all duration-300 ease-in-out">
        <Image src={image} width={300} height={300} className="w-full h-full" />
      </div>
      <div className="self-start flex flex-col gap-2">
        <h3 className="text-lg lg:text-xl font-medium">{title}</h3>
        <p className="text-sm lg:text-base font-light">{summary}</p>
      </div>
      <div className="self-start flex items-center justify-between w-full">
        <h3 className="text-lg font-medium">from ₦ {price}</h3>
        <motion.button
          className="py-2 px-5 bg-[#F663003B] rounded-3xl text-lg flex items-center justify-center gap-2 group active:bg-[#00c3a1] text-gray-700"
          whileHover={{ padding: "8px 15px" }}
          whileTap={{ padding: "8px 18px" }}
          //   transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Select
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hidden group-active:flex"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default FoodItem;
