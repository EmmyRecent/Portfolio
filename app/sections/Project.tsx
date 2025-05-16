import ProjectItem from "@/components/ProjectItem";
import Title from "@/components/Title";
import { getProjectContent } from "@/sanity/lib/client";
import * as motion from "motion/react-client";
import Image from "next/image";
import { containerVariants } from "./About";

const Project = async () => {
  const projectContent = await getProjectContent();
  const icons = [
    "css.svg",
    "firebase.svg",
    "github.svg",
    "html.svg",
    "javascript.svg",
    "node-js.svg",
    "react.svg",
    "tailwind-css.svg",
    "typescript.svg",
    "vercel.svg",
  ];

  return (
    <section id="projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="lg:main-wrapper hero-wrapper"
      >
        <Title name={`${projectContent.title}`} number="04" />

        <div>
          <p className="text-textColor text-md mb-8">{"Swipe left ---->>>>"}</p>
        </div>

        <ProjectItem projectContentItem={projectContent.project ?? []} />

        <div className="pt-48">
          <h3 className="text-textColor mb-5 text-center md:mb-10">
            Here are some of the technologies I have worked with recently:
          </h3>

          {/* Icon */}
          <div className="overflow-hidden whitespace-nowrap">
            <motion.div
              initial={{ x: 0 }}
              animate={{
                x: "-50%",
                transition: {
                  repeat: Infinity,
                  duration: 40,
                  ease: "linear",
                },
              }}
              className="flex items-center justify-center gap-20 min-w-max"
            >
              {[...icons, ...icons].map((icon, index) => (
                <Image
                  key={index}
                  src={`icons/${icon}`}
                  alt={`${icon.split(".")[0]}`}
                  width={65}
                  height={65}
                  className="inline-block"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
