"use client";

import { motion } from "framer-motion";
import StackLoop from "./StackLoop";
import Link from "next/link";

const Hero = () => {
  return (
    <motion.div
      id="hero"
      className="w-full max-w-[53rem] p-4 flex flex-col pt-[70px] md:pt-[98px] pb-[0.5rem] md:pb-[1rem] px-[1.5rem] md:px-[1rem] items-start gap-[20px]"
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <motion.section
        className="grid justify-center items-center text-center py-24 mt-6"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: "easeOut" } },
          }}
        >
          <h1 className="font-bold leading-[1.1] text-[42px] sm:text-[48px] md:text-[72px] lg:text-[96px] mt-6">
            Building Scalable Web Solutions
          </h1>

          <div className="mt-4 text-gray-600 mx-auto sm:text-lg md:text-xl max-w-xl">
            I build clean and modern web solutions, focusing on backend efficiency, frontend experience, scalable applications, and seamless user experiences.
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center mt-6 gap-3"
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: "easeOut" } },
          }}
        >
          <Link href="/#contact">
            <button className="bg-black text-white py-3 px-6 rounded-[14px] text-[16px] hover:opacity-90 transition-all duration-300 hover:px-7">
              Hire me!
            </button>
          </Link>

          <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#e1f9dc] text-[#178d00]">
            <div className="w-2 h-2 bg-[#178d00] rounded-full animate-pulse"></div>
            <span className="hidden md:inline">Available for new projects</span>
            <span className="md:hidden">Available</span>
          </div>
        </motion.div>
      </motion.section>

      <StackLoop />
    </motion.div>
  );
};

export default Hero;
