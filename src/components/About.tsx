"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="py-10 mt-10 px-4 sm:px-6 lg:px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Text Content */}
      <motion.div
        className="max-w-2xl grid items-center justify-start text-wrap mx-auto prose"
        variants={{
          hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
        }}
      >
        <div>
          <motion.div
            className="font-bold text-3xl text-black/90 mb-4"
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
            }}
          >
            About Me.
          </motion.div>

          {[
            "I design and build reliable backend systems that help businesses run their daily operations smoothly. I focus on clarity, performance, and long-term maintainability.",
            "I’m James Daniel, a software developer with a strong backend focus. I work mainly with Laravel and Node.js, building APIs, handling business logic, and structuring databases that scale.",
            "I also handle frontend and full-stack development when required, depending on project needs. Most of my work involves custom dashboards and management systems for companies across different industries.",
          ].map((text, idx) => (
            <motion.p
              key={idx}
              className="text-[16px] font-normal md:tracking-[.01em] md:leading-[1.4em] text-[#5a5a5a] mb-4"
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
              }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="flex justify-center mt-10 px-4"
        variants={{
          hidden: { opacity: 0, y: 30, scale: 0.9, filter: "blur(15px)" },
          visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 1, ease: "easeOut", delay: 0.4 } },
        }}
      >
        <Link href="https://www.github.com/Niel22" target="_blank">
          <div className="py-2 px-3 bg-white shadow-sm rounded-sm w-fit">
            <div className="overflow-hidden rounded-sm h-40 w-40 max-w-[250px]">
              <Image
                src="/img/niel.jpg"
                width={200}
                height={200}
                alt="profile image"
                className="object-cover w-full rounded-sm bg-white"
              />
            </div>
            <span className="text-sm block text-center mt-1 text-gray-800">
              @niel
            </span>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default About;
