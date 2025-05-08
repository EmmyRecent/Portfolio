"use client";

import { X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { hamburger } from "../app/assets/icons";
import { logo } from "../app/assets/images";
import { navLinks } from "../app/constants";
import { Button } from "./ui/button";

const sidenavVariants = {
  hidden: {
    x: "100%",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const navLinkVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  // a visible function to multiply the navLink index by 0.1s to delay each of them.
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.2,
    fontWeight: 600,
    transition: {
      type: "spring",
      stiffness: 500,
    },
  },
};

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollY = window.scrollY;

  // Toggle nav
  const handleNavMenu = () => {
    setIsNavOpen((prevValue) => !prevValue);
  };

  // Lock scroll when nav is open
  useEffect(() => {
    const body = document.querySelector("body");

    if (body) {
      if (isNavOpen) {
        body.classList.add("overflow-y-hidden");
      } else {
        body.classList.remove("overflow-y-hidden");
      }
    }
  }, [isNavOpen]);

  useEffect(() => {
    // A function to handle the scroll position of the header
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowHeader(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    // A function to get the active links of a section of the nav
    const activeLink = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-link");

      let current = "hero";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const id = section.getAttribute("id") ?? "";

        if (window.scrollY >= sectionTop - 60) {
          current = id;
        }
      });

      navLinks.forEach((item) => {
        const link = item as HTMLAnchorElement;

        link.classList.remove("active");

        if (link.href.includes(current)) {
          item.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", activeLink);

    return () => {
      window.removeEventListener("scroll", activeLink);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-[100] transition-transform duration-300 ease-in-out ${!showHeader && scrollY >= 40 ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="wrapper linear-border">
        <div className="linear-background my-4 flex justify-between px-3 py-1 lg:py-3">
          <Link href="/" className="z-[100]">
            <Image
              src={logo}
              width={50}
              height={50}
              alt="Logo"
              className="h-auto w-auto cursor-pointer"
            />
          </Link>

          <Image
            src={hamburger}
            width={60}
            height={60}
            alt="Hamburger menu"
            className="z-[100] max-w-full cursor-pointer lg:hidden"
            onClick={() => handleNavMenu()}
          />

          {isNavOpen && (
            <div
              onClick={() => handleNavMenu()}
              className="nav-background"
            ></div>
          )}

          {/* Desktop nav */}
          <motion.nav className="z-[100] hidden w-auto lg:flex lg:items-center lg:justify-center">
            <ul className="flex items-center justify-between gap-[46px] pt-0 pl-0 text-white">
              {navLinks.map((link, index) => (
                <motion.li
                  custom={index}
                  variants={navLinkVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="text-md hover:text-secondaryColor cursor-pointer font-[500] text-white transition-colors duration-300 ease-in-out"
                  key={index}
                >
                  <Link className="nav-link" href={`/${link.href}`}>
                    {link.label}
                  </Link>
                </motion.li>
              ))}

              <Button className="lg:hidden" variant={"mainSm"} size={"main"}>
                <Link href="/contact">Get in touch!</Link>
              </Button>
            </ul>
          </motion.nav>

          {/* Mobile nav */}
          <motion.nav
            variants={sidenavVariants}
            initial="hidden"
            animate={isNavOpen ? "visible" : "hidden"}
            className="bg-primaryColor fixed top-0 right-0 bottom-0 z-[100] h-screen w-full max-w-[80vw] overflow-y-scroll lg:hidden"
          >
            <X
              className="text-secondaryColor fixed top-0 right-0 mt-[26px] mr-8 ml-auto"
              onClick={() => handleNavMenu()}
              size={35}
            />

            <ul className="z-40 flex h-full flex-col items-center justify-center gap-8 pl-10 text-white">
              {navLinks.map((link, index) => (
                <motion.li
                  custom={index}
                  variants={navLinkVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  exit="hidden"
                  className="text-textColor text-md hover:text-secondaryColor cursor-pointer font-[500]"
                  key={index}
                  onClick={() => handleNavMenu()}
                >
                  <Link
                    href={`/${link.href}`}
                    className="nav-link flex flex-col items-center justify-center"
                  >
                    <p className="text-secondaryColor mb-1.5 text-xs">
                      0{index + 1}.
                    </p>

                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Nav button  */}
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 0.5,
                ease: "easeOut",
              },
            }}
            className="z-[100] hidden cursor-pointer lg:block"
          >
            <Button
              variant={"main"}
              size={"main"}
              className="navButton group px-4 py-3 transition-colors duration-300"
            >
              <span className="z-30">
                <Link href="/#next">Get in touch!</Link>
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
