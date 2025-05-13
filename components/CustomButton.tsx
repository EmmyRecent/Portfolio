"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "./ui/button";

type CustomButtonProps = {
  text?: string;
  href?: string;
  className?: string;
};

const CustomButton = ({ text, href, className }: CustomButtonProps) => {
  return (
    <Link href={`${href}`} className="w-max">
      <motion.div
        whileTap={{
          scale: 0.9,
        }}
        className="relative z-10 w-max"
      >
        <Button
          variant="main"
          size="main"
          className={`button relative z-10 mr-auto ${className && className}`}
        >
          <span className="relative z-10">{text}</span>
        </Button>
      </motion.div>
    </Link>
  );
};

export default CustomButton;
