import HeroContent from "@/components/HeroContent";
import { getHeroContent } from "@/sanity/lib/client";
import * as motion from "motion/react-client";

const heroVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      ease: "easeOut",
      stiffness: 350,
    },
  },
};

const Hero = async () => {
  const heroContent = await getHeroContent();

  return (
    <section className="bg-primaryColor pt-36" id="hero">
      <motion.div
        variants={heroVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="lg:main-wrapper"
      >
        <HeroContent heroContent={heroContent} />
      </motion.div>
    </section>
  );
};

export default Hero;
