"use client";

import Image from "next/image";
import { projects } from "../../_data/data";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.div
      id="projects"
      className="py-10 mt-10 px-4 sm:px-6 lg:px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-2xl flex flex-col gap-4 mx-auto">

        <motion.h1
          className="font-bold text-3xl text-black/90"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects.
        </motion.h1> 

        <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={`/projects/${data.slug}`} className="rounded-2xl no-underline">
                <div className="flex flex-col gap-2">
                  <div className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden ${data.bgColor}`}>
                    <Image
                      src={`/img/${data.img}`}
                      alt={data.name}
                      fill
                      className="object-cover object-left rounded-xl translate-x-3 md:translate-x-5 translate-y-3 md:translate-y-5"
                    />
                  </div>

                  <h2 className="text-lg font-bold tracking-[0.5px]">{data.name}</h2>
                  <p className="text-xs text-wrap prose font-light text-gray-700 line-clamp-2 flex-grow">
                    {data.role}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex items-center justify-center w-full"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/projects" className="mx-auto mt-4 bg-black hover:bg-[#121212] flex items-center rounded-[14px] px-6 py-3 text-[16px] font-normal text-white transition-all duration-500 group">
            <span className="flex items-center font-medium text-[16px] transition-all duration-300 group-hover:pr-2">
              View All
            </span>
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Project;
