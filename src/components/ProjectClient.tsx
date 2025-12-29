"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

const ProjectClient = ({ project }: { project: any }) => {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-6">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-30"
      >
        <h1 className="font-semibold text-[32px] sm:text-[40px] md:text-[46px]">
          {project.name}
        </h1>
      </motion.div>

      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl mt-8"
      >
        <h2 className="font-semibold text-[20px] mb-3">Project Overview</h2>

        <div className="bg-gray-100 rounded-md p-4 space-y-4 text-gray-700">
          {Array.isArray(project.description)
            ? project.description.map((text: string, index: number) => (
                <p key={index}>{text}</p>
              ))
            : <p>{project.description}</p>}
        </div>
      </motion.div>

      {/* Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-10"
      >
        <h2 className="font-semibold text-[20px] mb-4">Technologies Used</h2>

        <ul className="flex flex-wrap gap-2">
          {project.technologyUsed.map((tech: string) => (
            <li key={tech}>
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="px-3 py-2 rounded-md text-sm bg-green-100 text-green-700 inline-block"
              >
                {tech}
              </motion.span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-12 flex flex-wrap gap-4"
      >
        {project.link && (
          <Link href={project.link} target="_blank">
            <Button className="!bg-black text-white !py-6">
              View Live Project <ExternalLink className="ml-2" />
            </Button>
          </Link>
        )}

        {project.github && (
          <Link href={project.github} target="_blank">
            <Button variant="outline" className="!py-6">
              View Source <FiGithub className="ml-2" />
            </Button>
          </Link>
        )}
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <Image
          src={`/img/${project.img}`}
          alt={`Screenshot of ${project.name}`}
          width={1200}
          height={700}
          className="rounded-lg w-full h-auto border"
        />
      </motion.div>

    </div>
  );
};

export default ProjectClient;
