"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useReward } from "react-rewards";
import { motion } from "framer-motion";

const Hero = () => {
  const { reward, isAnimating } = useReward("rewardId", "emoji", {
    emoji: ["🍕", "🍔", "🍟", "✨", "😍", "❤️"], // Add more emojis as needed
    elementCount: 30,
    elementSize: 25,
    angle: 90,
    spread: 40,
    startVelocity: 15,
    decay: 0.94,
    zIndex: 10,
  });

  const handleClick = () => {
    if (!isAnimating) {
      reward();
    }
  };

  return (
    <div className="hero w-full h-[400px] flex items-center p-4 sm:p-8 lg:p-16 xl:p-32 relative overflow-hidden">
      <div className="flex flex-col  text-left items-start justify-center text-[#f1f5f9] w-1/2">
        <div className="flex items-center justify-center my-4">
          <Image
            src={"/images/dodopizza.png"}
            width={150}
            height={150}
            alt="dodo pizza"
            className="w-20 sm:w-24 md:w-28 h-auto"
          />
          <h2 className="text-base text-left font-bold shadow-2xl">
            DODO Pizza
          </h2>
        </div>
        <h2 className="text-xl lg:text-2xl font-bold shadow-2xl">
          Order food anytime, anywhere
        </h2>
        <p className="font-medium my-4 text-sm lg:text-base tracking-wide text-slate-200">
          Browse from our list of specials to place your order and have food
          delivered to you in no time. Affordable, tasty and fast!
        </p>
      </div>
      <motion.div
        className=" absolute right-0 md:right-[5%]  overflow-hidden w-[250px] sm:w-[300px] md:w-[350px]"
        initial={{ translateX: 200 }}
        whileInView={{ translateX: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <span id="rewardId" style={{ width: 2, height: 2 }} />
        <Image
          src={"/images/herobg2-removebg-preview.png"}
          width={150}
          height={150}
          alt="pizza"
          className="w-full h-auto animate-spin-slow ml-5 cursor-pointer"
          onClick={handleClick}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
