import GithubClient from "@/components/GithubClient";
import { Metadata } from "next";
import React from "react";

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




const Github: React.FC = () => {
  return <GithubClient />
};

export default Github;
