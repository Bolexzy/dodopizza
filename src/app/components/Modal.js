"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 my-4 py-4 z-50">
      <motion.button
        className="sticky top-0 font-medium tracking-wide text-lg rounded-3xl p-2 px-3 text-center h-auto bg-[#f86400] text-white"
        onClick={toggleModal}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        My Order
      </motion.button>
      {isOpen && (
        <motion.div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            zIndex: 1000,
          }}
          initial={{ opacity: 0, width: "0%" }}
          animate={{ opacity: 1, width: "70%", ease: "easeInOut" }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
            mass: 1,
            bounce: 0.25,
          }}
          className="rounded-2xl p-4 w-4/5"
        >
          <button onClick={toggleModal}>X</button>
          <div className="w-full flex items-center justify-center">
            <Image src={"/images/dog.svg"} width={300} height={300} />
          </div>
          <h1 className="text-center font-bold text-lg my-4">
            Oops, it’s empty here!
          </h1>
          <p className="text-center font-light text-sm mt-2">
            Minimal order delivery value is ₦3,000
          </p>
        </motion.div>
      )}

      <div
        style={
          isOpen
            ? {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                zIndex: 900,
              }
            : {}
        }
      />
    </div>
  );
};

export default Modal;
