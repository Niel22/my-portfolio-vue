
import { Metadata } from "next";
import ProjectsClient from "@/components/ProjectsClient";

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
    <ProjectsClient />
  );
};

export default Projects;
