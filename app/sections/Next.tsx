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
          I&apos;m always excited to connect with new people and explore
          opportunities. Whether you have a question, a project idea, or just
          want to say hello, feel free to drop me a message. I&apos;ll do my
          best to respond promptly and help however I can.
        </p>

        <CustomButton text="Contact Me!" href="contact" />
      </motion.div>
    </section>
  );
};

export default Next;
