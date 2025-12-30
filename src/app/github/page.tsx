"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon, Users, GitFork, FolderGit2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GitHub Insights | James Daniel – Software Engineer",
  description:
    "GitHub insights and coding statistics for James Daniel. View repositories, contributions, language usage, and open-source activity as a backend-focused software engineer.",
  keywords: [
    "GitHub Profile",
    "GitHub Stats",
    "Open Source Contributions",
    "Software Engineer GitHub",
    "Backend Developer GitHub",
    "Node.js Developer",
    "Laravel Developer",
    "Coding Activity",
    "Programming Statistics",
    "James Daniel GitHub"
  ],
  openGraph: {
    title: "GitHub Insights | James Daniel",
    description:
      "A detailed look at my GitHub activity, repositories, and contributions as a backend software engineer.",
    url: "https://niel-dev.vercel.app/github",
    siteName: "James Daniel Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub Insights | James Daniel",
    description:
      "Backend developer GitHub statistics, repositories, and open-source activity."
  },
};


type GithubStats = {
  public_repos: number;
  followers: number;
  following: number;
};

const Github: React.FC = () => {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const username = "Niel22";

  const githubImages = [
    { src: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true`, alt: "GitHub Stats" },
    { src: `https://github-readme-streak-stats.herokuapp.com/?user=${username}`, alt: "GitHub Streak" },
    { src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact`, alt: "Top Languages" },
    { src: `https://ghchart.rshah.org/${username}`, alt: "Activity Graph" },
    { src: `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github-light`, alt: "GitHub Activity Graph" },
  ];

  const [imgError, setImgError] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data: GithubStats = await res.json();
        setStats(data);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const cards = [
    { label: "Public Repos", value: stats?.public_repos, icon: <FolderGit2 size={22} /> },
    { label: "Followers", value: stats?.followers, icon: <Users size={22} /> },
    { label: "Following", value: stats?.following, icon: <GitFork size={22} /> },
  ];

  return (
    <motion.section
      className="w-full flex flex-col items-center py-32 px-4 md:px-20 gap-8"
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
        
      <motion.div
        className="flex flex-col gap-4 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="text-[36px] md:text-[48px] font-extrabold tracking-tight">
          GitHub Statistics
        </h1>
        <p className="md:text-lg text-gray-600">
          A snapshot of my GitHub activity, contributions, and coding stats.
        </p>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          className="inline-flex items-center justify-center gap-2 px-6 py-4 mt-4 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-900"
        >
          <GithubIcon size={20} /> View on GitHub
        </a>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full max-w-4xl">
        {(loading ? Array.from({ length: 3 }) : cards).map((card: any, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-white rounded-md p-6 flex items-center gap-4 shadow-xl"
          >
            {loading ? (
              <div className="h-20 w-full bg-gray-200 animate-pulse rounded-md" />
            ) : (
              <>
                <div className="p-3 bg-black text-white rounded-full">{card.icon}</div>
                <div>
                  <p className="text-sm text-gray-500">{card.label}</p>
                  <h3 className="text-2xl font-bold">{card.value}</h3>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 w-full max-w-6xl">
        {githubImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.3 + i * 0.08 }}
            className="bg-white rounded-sm p-6 shadow-xl flex justify-center"
          >
            {!imgError[img.src] ? (
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-contain"
                onError={() => setImgError(p => ({ ...p, [img.src]: true }))}
              />
            ) : (
              <span className="text-gray-400">{img.alt} unavailable</span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Github;
