"use client";

import Image from "next/image";
import { logo } from "../app/assets/images";
import { hamburger } from "../app/assets/icons";
import { navLinks } from "../app/constants";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";

const sidenavVariants = {
  visible: {
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  hidden: {
    x: 700,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavMenu = () => {
    setIsNavOpen((prevValue) => !prevValue);
  };

  return (
    <header>
      <div className="wrapper linear-border">
        <div className="linear-background my-4 flex justify-between px-3 py-1 lg:py-3">
          <Link href="/" className="z-40">
            <Image
              src={logo}
              width={50}
              height={50}
              alt="Logo"
              className="cursor-pointer"
            />
          </Link>

          <Image
            src={hamburger}
            width={60}
            height={60}
            alt="Hamburger menu"
            className="z-30 max-w-full cursor-pointer lg:hidden"
            onClick={() => handleNavMenu()}
          />

          {isNavOpen && (
            <div
              onClick={() => handleNavMenu()}
              className="nav-background"
            ></div>
          )}

          {/* Desktop nav */}
          <nav className="hidden w-auto lg:flex lg:items-center lg:justify-center">
            <ul className="z-40 flex items-center justify-between gap-[46px] pt-0 pl-0 text-white">
              {navLinks.map((link, index) => (
                <li
                  className="text-md cursor-pointer font-[500] text-white"
                  key={index}
                >
                  <Link href={`/${link.href}`}>{link.label}</Link>
                </li>
              ))}

              <Button className="lg:hidden" variant={"mainSm"} size={"main"}>
                <Link href="/contact">Get in touch!</Link>
              </Button>
            </ul>
          </nav>

          {/* Mobile nav */}
          <motion.nav
            variants={sidenavVariants}
            initial="hidden"
            animate={isNavOpen ? "visible" : "hidden"}
            className="bg-secondaryColor fixed top-0 right-0 bottom-0 z-40 w-full max-w-[70vw] lg:hidden"
          >
            <X
              className="text-primaryColor mt-[26px] mr-7 ml-auto"
              onClick={() => handleNavMenu()}
              size={35}
            />

            <ul className="z-40 flex flex-col items-center justify-center gap-4 pt-32 pl-10 text-white">
              {navLinks.map((link, index) => (
                <motion.li
                  whileHover={{ scale: 1.2, fontWeight: 600 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  className="text-primaryColor text-md cursor-pointer font-[500]"
                  key={index}
                  onClick={() => handleNavMenu()}
                >
                  <Link href={`/${link.href}`}>{link.label}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          <Button
            className="z-40 hidden cursor-pointer lg:block"
            variant={"main"}
            size={"main"}
          >
            <Link href="/contact">Get in touch!</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
