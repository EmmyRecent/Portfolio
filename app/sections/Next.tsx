import CustomButton from "@/components/CustomButton";
import * as motion from "motion/react-client";
import { containerVariants } from "./About";

const Next = () => {
  return (
    <section id="next">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-wrapper flex flex-col items-center justify-center gap-3 text-center"
      >
        <h2 className="w-full capitalize">
          <span>{"> 05."}</span> What&apos;s Next?
        </h2>

        <h3 className="text-textColor font-medium capitalize">Get in touch</h3>

        <p className="mb-4 w-full max-w-[500px]">
          Although I&apos;m Always open for any new opportunities, my inbox is
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back
        </p>

        <CustomButton text="Contact Me!" href="contact" />
      </motion.div>
    </section>
  );
};

export default Next;
