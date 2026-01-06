"use client";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const techStack = [
  { name: "Laravel", src: "https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge" },
  { name: "PHP", src: "https://img.shields.io/badge/-PHP-777BB4?logo=php&logoColor=white&style=for-the-badge" },
  { name: "MySQL", src: "https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white&style=for-the-badge" },
  { name: "TypeScript", src: "https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge" },
  { name: "Express.js", src: "https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=for-the-badge" },
  { name: "React.js", src: "https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=for-the-badge" },
  { name: "TailwindCSS", src: "https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwind-css&logoColor=white&style=for-the-badge" },
  { name: "Postman", src: "https://img.shields.io/badge/-Postman-FF6C37?logo=postman&logoColor=white&style=for-the-badge" },
  { name: "Nextjs", src: "https://img.shields.io/badge/-Next.js-000000?logo=next.js&logoColor=white&style=for-the-badge" },
  { name: "CICD", src: "https://img.shields.io/badge/-CI%2FCD-0078D4?logo=azuredevops&logoColor=white&style=for-the-badge" },
  { name: "Nestjs", src: "https://img.shields.io/badge/-NestJS-E0234E?logo=nestjs&logoColor=white&style=for-the-badge" },
  { name: "Laravel", src: "https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge" },
  { name: "PHP", src: "https://img.shields.io/badge/-PHP-777BB4?logo=php&logoColor=white&style=for-the-badge" },
  { name: "MySQL", src: "https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white&style=for-the-badge" },
  { name: "TypeScript", src: "https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge" },
  { name: "Express.js", src: "https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=for-the-badge" },
  { name: "React.js", src: "https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=for-the-badge" },
  { name: "TailwindCSS", src: "https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwind-css&logoColor=white&style=for-the-badge" },
  { name: "Postman", src: "https://img.shields.io/badge/-Postman-FF6C37?logo=postman&logoColor=white&style=for-the-badge" },
  { name: "Nextjs", src: "https://img.shields.io/badge/-Next.js-000000?logo=next.js&logoColor=white&style=for-the-badge" },
  { name: "CICD", src: "https://img.shields.io/badge/-CI%2FCD-0078D4?logo=azuredevops&logoColor=white&style=for-the-badge" },
  { name: "Nestjs", src: "https://img.shields.io/badge/-NestJS-E0234E?logo=nestjs&logoColor=white&style=for-the-badge" },
];

// const techStack = [
//   { name: "Laravel", src: "/tech/laravel.svg" },
//   { name: "PHP", src: "/tech/php.svg" },
//   { name: "MySQL", src: "/tech/mysql.svg" },
//   { name: "Node.js", src: "/tech/nodejs.svg" },
//   { name: "TypeScript", src: "/tech/typescript.svg" },
//   { name: "Express.js", src: "/tech/expressjs.svg" },
//   { name: "React.js", src: "/tech/react.svg" },
//   { name: "TailwindCSS", src: "/tech/tailwind.svg" },
//   { name: "Laravel", src: "/tech/laravel.svg" },
//   { name: "PHP", src: "/tech/php.svg" },
//   { name: "MySQL", src: "/tech/mysql.svg" },
//   { name: "Node.js", src: "/tech/nodejs.svg" },
//   { name: "TypeScript", src: "/tech/typescript.svg" },
//   { name: "Express.js", src: "/tech/expressjs.svg" },
//   { name: "React.js", src: "/tech/react.svg" },
//   { name: "TailwindCSS", src: "/tech/tailwind.svg" },
// ];

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
              <img
                src={tech.src}
                alt={tech.name}
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
