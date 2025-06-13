import Title from "@/components/Title";
import { getAboutContent } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import * as motion from "motion/react-client";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const containerVariants = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const About = async () => {
  const aboutContent = await getAboutContent();

  return (
    <section id="about">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.4,
        }}
        className="about-wrapper justify-centers flex flex-col items-center gap-4 lg:flex-row"
      >
        <div className="flex-1/2">
          <Title name={`${aboutContent.title}`} number="01" />

          <div className="w-full space-y-4">
            <PortableText
              value={aboutContent.bio || []}
              components={{
                marks: {
                  strong: ({ children }) => <span>{children}</span>,
                },
              }}
            />
          </div>
        </div>

        <div className="about-image group relative">
          <div className="rounded-round absolute inset-0 z-10 h-full w-full border-none bg-gray-800 opacity-20 transition-opacity duration-300 ease-out group-hover:opacity-0"></div>
          <Image
            src={aboutContent.image ? urlFor(aboutContent.image).url() : ""}
            alt="Profile Photo"
            width={345}
            height={307}
            className="about-image rounded-round"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
