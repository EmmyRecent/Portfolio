import ServiceItem from "@/components/ServiceItem";
import Title from "@/components/Title";
import { getServiceContent } from "@/sanity/lib/client";
import * as motion from "motion/react-client";
import { containerVariants } from "./About";

const Services = async () => {
  const servicesContent = await getServiceContent();

  return (
    <section className="pt-32 md:pt-20 lg:pt-0" id="services">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="hero-wrapper flex flex-col items-center justify-center"
      >
        <Title
          name={`${servicesContent.title}`}
          number="03"
          styles="justify-center"
        />

        <ul className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          {servicesContent.items?.map((item, index) => (
            <ServiceItem
              key={index}
              title={item.title}
              description={item.description}
              Icon={item.Icon}
            />
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Services;
