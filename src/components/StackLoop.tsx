"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const techStack = [
  { name: "Laravel", src: "/tech/laravel.svg" },
  { name: "PHP", src: "/tech/php.svg" },
  { name: "MySQL", src: "/tech/mysql.svg" },
  { name: "Node.js", src: "/tech/nodejs.svg" },
  { name: "TypeScript", src: "/tech/typescript.svg" },
  { name: "Express.js", src: "/tech/expressjs.svg" },
  { name: "React.js", src: "/tech/react.svg" },
  { name: "TailwindCSS", src: "/tech/tailwind.svg" },
  { name: "Laravel", src: "/tech/laravel.svg" },
  { name: "PHP", src: "/tech/php.svg" },
  { name: "MySQL", src: "/tech/mysql.svg" },
  { name: "Node.js", src: "/tech/nodejs.svg" },
  { name: "TypeScript", src: "/tech/typescript.svg" },
  { name: "Express.js", src: "/tech/expressjs.svg" },
  { name: "React.js", src: "/tech/react.svg" },
  { name: "TailwindCSS", src: "/tech/tailwind.svg" },
];

const StackLoop = () => {
  return (
    <motion.div
      className="relative rounded-full overflow-hidden py-1 md:max-w-[650px] max-w-[320px] mx-auto"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
    >
      <Marquee delay={5} speed={60}>
        <div className="flex-center gap-3 mx-3">
          {techStack.map((tech, index) => (
            <div key={index}>
              <Image
                src={tech.src}
                alt={tech.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Marquee>

      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-white to-transparent" />
    </motion.div>
  );
};

export default StackLoop;
