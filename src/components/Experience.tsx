"use client";

import { experiences } from "../../_data/data";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="px-2 sm:px-20 lg:px-20">
      <hr className="mt-30 px-10" />

      <div className="mt-8 p-6">
        <h2 className="font-bold text-2xl text-black mb-12">
          Work Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-gray-200 pl-6 relative"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              
              <motion.span
                className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-black flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "backOut" }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
              </motion.span>

              <p className="text-sm text-gray-500">{exp.period}</p>

              <h3 className="font-semibold text-lg mt-1">
                {exp.role} — {exp.company}
              </h3>

              <p className="text-sm text-gray-600 mb-4">{exp.location}</p>

              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <hr className="mt-20" />
    </div>
  );
};

export default Experience;
