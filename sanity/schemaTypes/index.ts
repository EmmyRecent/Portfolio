import { type SchemaTypeDefinition } from "sanity";
import { about } from "./about";
import { faq } from "./faq";
import { faqItem } from "./faqItem";
import { hero } from "./hero";
import { projectItem } from "./projectItem";
import { projects } from "./projects";
import { serviceItems } from "./serviceItem";
import { services } from "./services";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    hero,
    about,
    serviceItems,
    services,
    projectItem,
    projects,
    faqItem,
    faq,
  ],
};
