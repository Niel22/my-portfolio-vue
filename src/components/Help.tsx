"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const skills = [
  "Business and company websites",
  "SaaS platforms and dashboards",
  "E-commerce and online marketplaces",
  "Admin panels and internal tools",
  "Booking and reservation systems",
  "Inventory and POS systems",
  "Educational platforms and LMS",
  "Subscription-based applications",
  "REST API–only backend services",
  "Custom web applications for startups"
];

const Help: React.FC = () => {
  return (
    <div className="w-full max-w-[63rem] flex flex-col items-start mx-auto">
      <motion.div
        className="relative bg-black px-4 md:px-20 py-20 w-full overflow-hidden"
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Image
          src="/doodle.webp"
          alt="Doodle"
          fill
          className="absolute top-0 left-0 object-cover opacity-10 pointer-events-none"
          priority
        />

        <div className="relative z-10 text-center w-full">
          <motion.h2
            className="text-[32px] md:text-[40px] font-bold tracking-tight text-white mb-4"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            How Can I Help?
          </motion.h2>

          <motion.p
            className="text-[18px] md:text-[20px] text-[#a4a2a2] mb-10"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Let&apos;s turn your vision into something amazing.
          </motion.p>

          <motion.div
            className="relative overflow-hidden py-1 border-l border-r border-transparent mx-auto"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Marquee delay={5} speed={60}>
              <div className="flex-center gap-3 mx-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex-shrink-0 bg-[#F9F9F9] px-6 py-3 rounded-[16px] flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  >
                    <h3 className="text-[13px] font-medium">{skill}</h3>
                  </div>
                ))}
              </div>
            </Marquee>

            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-10 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-10 bg-gradient-to-l from-black/90 via-black/80 to-transparent" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Help;
