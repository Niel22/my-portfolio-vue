import React from "react";
import { projects } from "../../../../_data/data";
import { notFound } from "next/navigation";

import { Metadata } from "next";
import ProjectClient from "@/components/ProjectClient";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "This project does not exist.",
    };
  }

  const shortDescription = Array.isArray(project.description)
    ? project.description[0]
    : project.description;

  return {
    title: `${project.name} | Portfolio of James Daniel`,
    description: shortDescription,
    openGraph: {
      title: project.name,
      description: shortDescription,
      url: `https://niel-dev.vercel.app/projects/${project.slug}`,
      images: [
        {
          url: `https://niel-dev.vercel.app/img/${project.img}`,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
      type: "website",
    },
  };
}

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <ProjectClient project={project} />;
};

export default ProjectPage;
