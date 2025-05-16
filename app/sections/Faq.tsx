import Title from "@/components/Title";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getFaqContent } from "@/sanity/lib/client";
import { Accordion } from "@radix-ui/react-accordion";
import * as motion from "motion/react-client";
import { containerVariants } from "./About";

const Faq = async () => {
  const faqContent = await getFaqContent();

  return (
    <section id="faq">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-wrapper"
      >
        <Title name={`${faqContent.title}`} number="04" />

        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex-1/2 space-y-4">
            <h2 className="text-secondaryColor font-semibold">
              {faqContent.subtitle}
            </h2>
            <h3 className="text-textColor font-medium">
              {faqContent.description}
            </h3>
          </div>

          <Accordion type="single" collapsible className="flex-1/2 space-y-4">
            {faqContent.items?.map((item, index) => (
              <AccordionItem
                value={`${index}`}
                key={index}
                className="border-textColor rounded-round border p-3"
              >
                <AccordionTrigger className="text-secondaryColor text-md font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-textColor lg:text-md text-sm font-normal">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </section>
  );
};

export default Faq;
