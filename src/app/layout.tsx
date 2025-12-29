import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://myportfolio.vercel.app"),
  title: "James Daniel | Backend & Full-Stack Developer",
  description:
    "Backend and full-stack software developer with 3+ years of experience, including 2+ years professional experience in Laravel and Node.js. Expert in building scalable APIs, web applications, and database-driven solutions. Skilled in system design, clean code practices, and delivering modern frontend touches with React.js, Vue.js, and Tailwind CSS. Experienced in creating client-focused web solutions, SaaS platforms, e-commerce systems, and enterprise software.",
  keywords: [
    "Backend Developer",
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Laravel",
    "Node.js",
    "Express.js",
    "NestJS",
    "REST API Development",
    "GraphQL",
    "Database Design",
    "MySQL",
    "PostgreSQL",
    "Sequelize ORM",
    "Prisma ORM",
    "Clean Code",
    "System Design",
    "Enterprise Applications",
    "SaaS Platforms",
    "E-commerce Solutions",
    "Web Applications",
    "React.js",
    "Vue.js",
    "Tailwind CSS",
    "Client Web Solutions",
    "Software Development",
    "Software Solutions",
    "Scalable Web Apps",
    "API Integration",
    "Performance Optimization",
    "James Daniel",
    "Professional Portfolio"
  ],
  authors: [{ name: "James Daniel" }],
  creator: "James Daniel",
  publisher: "James Daniel",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: "/vercel.svg",
    shortcut: "/vercel.svg",
    apple: "/vercel.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://niel-dev.vercel.app",
    siteName: "James Daniel Portfolio",
    title: "James Daniel | Software Developer",
    description:
      "Backend-focused software developer with 3+ years experience, including 2+ years professional experience in Laravel and Node.js. Skilled in building scalable APIs, full-stack applications, and database-driven solutions, with modern frontend touches using React.js and Tailwind CSS.",
    images: [
      {
        url: "https://niel-dev.vercel.app/img/portfoliopics.jpg",
        width: 1200,
        height: 630,
        alt: "James Daniel | Backend & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "James Daniel | Backend & Full-Stack Developer",
    description:
      "Backend-focused software developer with 3+ years experience, including 2+ years professional experience in Laravel and Node.js. Skilled in building scalable APIs, full-stack applications, and database-driven solutions, with modern frontend touches using React.js and Tailwind CSS.",
    creator: "@jamesdaniel2264",
    images: ["https://niel-dev.vercel.app/img/portfoliopics.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "t9__o3lkFmWjRoMK30kARlI9jUwQiQSBXPPfDlUc8ws",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "James Daniel Portfolio",
  },
};


<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "James Daniel",
      url: "https://niel-dev.vercel.app",
      image: "https://niel-dev.vercel.app/img/portfoliopics.jpg",
      sameAs: [
        "https://github.com/Niel22",
        "https://x.com/codeNovaNiel",
        "https://linkedin.com/in/jamesdaniel2264"
      ],
      jobTitle: "Backend & Full-Stack Developer",
      worksFor: {
        "@type": "Zealarax Technologies",
        name: "Backend & Full-Stack Developer",
      },
      description: "Backend-focused software developer with 3+ years experience, including 2+ years professional experience in Laravel and Node.js. Skilled in building scalable APIs, full-stack applications, and database-driven solutions, with modern frontend touches using React.js and Tailwind CSS.",
    }),
  }}
/>


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <main className="font-sans border-b border-l border-r max-w-4xl mx-auto">
          <Navbar />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
