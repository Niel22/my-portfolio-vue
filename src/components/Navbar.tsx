import { FileText, Github, Home, MessageCircle } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { IoBriefcaseOutline, IoFolderOpenOutline } from "react-icons/io5";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const navItems = [
  {
    label: "Projects",
    href: "/projects",
    icon: IoFolderOpenOutline,
  },
  {
    label: "Experience",
    href: "/#experience",
    icon: IoBriefcaseOutline,
  },
];

const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 top-[10px] md:top-[25px] w-full z-50 flex justify-center p-4">
      <div className="liquidGlass-wrapper bg-[#ffffff80] rounded-full border border-zinc-200">
        <div className="liquidGlass-effect"></div>
        <div className="liquidGlass-tint"></div>
        <div className="liquidGlass-shine"></div>
        <nav className="liquidGlass-text flex items-center gap-1 p-[6px] relative z-10">
          
          <div>
          <Link href="/" className="block">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 hover:opacity-90 transition">
              <Image
                src="/img/niel.jpg"
                alt="Profile Picture"
                width={48}
                height={48}
                className="object-cover object-top w-full h-full"
                priority
              />
            </div>
          </Link>
        </div>

          <div className="h-5 w-[1px] bg-zinc-200 mx-2" />

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/#hero"
                className="p-[15px] text-zinc-600 hover:text-zinc-900 transition-all duration-300 hover:bg-[#ededed]/20 rounded-[15px]"
              >
                
                <span className="md:hidden">
                  <Home size={20} />
                </span>

                <span className="hidden md:block font-medium">
                  Home
                </span>
              </Link>
            </TooltipTrigger>
            
            <TooltipContent className="md:hidden">
              Home
            </TooltipContent>
          </Tooltip>

          <div className="hidden md:flex gap-2">
            {navItems.map(({ label, href, icon: Icon }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <Link
                    href={href}
                    className="p-[15px] text-zinc-600 hover:text-zinc-900 transition-all duration-300 hover:bg-[#ededed]/20 rounded-[15px]"
                  >
                    
                    <span className="md:hidden">
                      <Icon size={20} />
                    </span>

                    <span className="hidden md:block font-medium">
                      {label}
                    </span>
                  </Link>
                </TooltipTrigger>
                
                <TooltipContent className="md:hidden">
                  {label}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          <div className="h-5 w-[1px] bg-zinc-200 mx-2" />

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/github"
                rel="noreferrer"
                className="p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 hover:text-zinc-900 transition-all duration-300 hover:bg-[#ededed]/20 rounded-[15px]"
              >
                <Github size={20} />
              </Link>
            </TooltipTrigger>
            <TooltipContent>GitHub</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/JAMES_DANIEL_BOLUWATIFE_CV.docx"
                target="_blank"
                download
                className="p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 hover:text-zinc-900 transition-all duration-300 hover:bg-[#ededed]/20 rounded-[15px]"
              >
                <FileText size={20} />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Resume</TooltipContent>
          </Tooltip>

          <div className="h-5 w-[1px] bg-zinc-200 mx-2" />

          <Link
            href="/#contact"
            className="relative p-[14px] md:py-[14px] md:px-[22px] rounded-full text-sm bg-black text-white hover:opacity-90 transition-all duration-300 md:hover:px-[28px] flex items-center justify-center"
          >
            <span className="md:hidden">
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <MessageCircle size={20} />
                  </span>
                </TooltipTrigger>
                <TooltipContent>Contact</TooltipContent>
              </Tooltip>
            </span>

            <span className="hidden md:block">Contact Me</span>
          </Link>
        </nav>
      </div>

    </header>
  );
};

export default Navbar;
