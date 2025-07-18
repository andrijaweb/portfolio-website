import Link from "next/link";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import ShinyButton from "./ui/ShinyButton";
import {
  mainNavigationLinks,
  portfolioProjects,
  socialLinks,
} from "../_lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="flex flex-col justify-center antialiased relative border border-dark-300 rounded-xl mb-5"
      id="contact"
    >
      <div>
        <div className="space-y-8 p-10">
          <h1 className="text-5xl font-bold max-w-2xl leading-[110%] relative z-10">
            Like what you see? Reach out{" "}
            <Link
              href="mailto:andrijawebd@gmail.com"
              className="text-primary hover:text-primary/80 border-b-2 border-primary hover:border-primary/80 transition-colors duration-200"
            >
              via email
            </Link>{" "}
            to collaborate!
          </h1>

          <ShinyButton>
            <Link href="mailto:andrijawebd@gmail.com">Schedule call</Link>
          </ShinyButton>
        </div>

        <div className="mt-16 p-10 border-t border-dark-200 dark:border-white/10 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
          <div className="space-y-2.5">
            <h3 className="text-xl font-bold relative z-10">
              Andrija Djordjevic
            </h3>
            <p className="text-dark-200/70 dark:text-stone-200/70 relative z-10">
              &copy; {currentYear} | All rights reserved.
            </p>
          </div>

          <div className="flex justify-between gap-0 sm:gap-16">
            <ul className="space-y-2.5 relative z-10 text-sm sm:text-base">
              <li className="text-base sm:text-lg font-semibold">Navigate</li>
              {mainNavigationLinks.map((link) => (
                <li
                  key={link.label}
                  className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white"
                >
                  <Link href={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-2.5 relative z-10 text-sm sm:text-base">
              <li className="text-lg font-semibold">Projects</li>
              {portfolioProjects.map((project) => (
                <li
                  key={project.id}
                  className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white"
                >
                  <Link href={`/work/${project.id}`}>{project.heading}</Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-2.5 relative z-10 text-sm sm:text-base">
              <li className="text-lg font-semibold">Socials</li>
              {socialLinks.map((link) => (
                <li
                  key={link.label}
                  className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white"
                >
                  <Link href={link.url} target="_blank">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <BackgroundBeams className="hidden sm:flex" />
    </div>
  );
};

export default Footer;
