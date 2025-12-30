"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../../../_data/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | James Daniel – Backend & Web Solutions",
  description:
    "Explore real-world projects built by James Daniel. Focused on backend development, scalable APIs, system design, and clean architecture. Includes SaaS platforms, web applications, and client-ready solutions.",
  keywords: [
    "Backend Projects",
    "Web Development Projects",
    "Laravel Projects",
    "Node.js Projects",
    "API Development",
    "Software Engineering Portfolio",
    "Full Stack Projects",
    "Scalable Web Applications",
    "Client Web Solutions",
    "James Daniel Projects"
  ],
  openGraph: {
    title: "Projects | James Daniel",
    description:
      "A curated list of backend and full-stack projects focused on performance, clean architecture, and real client use cases.",
    url: "https://niel-dev.vercel.app/projects",
    siteName: "James Daniel Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | James Daniel",
    description:
      "Backend-focused projects showcasing APIs, SaaS systems, and scalable web applications."
  },
};

const Projects = () => {
  return (
    <div className="w-full max-w-[53rem] p-4 flex flex-col pt-[70px] md:pt-[98px] px-[1.5rem] md:px-[1rem] gap-[20px]">
      <motion.div
        className="max-w-2xl flex flex-col py-12 gap-4 mx-auto"
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="font-bold text-3xl text-black/90">
          Projects.
        </h1>

        <p className="text-sm text-gray-600 max-w-xl">
          A selection of real projects I’ve built, focused on backend logic,
          performance, and clean architecture.
        </p>

        <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.08,
              }}
            >
              <Link
                href={`/projects/${data.slug}`}
                className="rounded-2xl no-underline block group"
              >
                <div className="flex flex-col gap-2">
                  <div
                    className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden ${data.bgColor}`}
                  >
                    <Image
                      src={`/img/${data.img}`}
                      alt={data.name}
                      fill
                      className="object-cover object-left rounded-xl
                                 translate-x-3 md:translate-x-5
                                 translate-y-3 md:translate-y-5
                                 group-hover:scale-[1.03]
                                 transition-transform duration-500"
                    />
                  </div>

                  <h2 className="text-lg font-bold tracking-[0.5px]">
                    {data.name}
                  </h2>

                  <p className="text-xs prose font-light text-gray-700 line-clamp-2">
                    Web App Development
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
