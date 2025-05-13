import { type SchemaTypeDefinition } from "sanity";
import { hero } from "./hero";
import { about } from "./about";
import { serviceItems } from "./serviceItem";
import { services } from "./services";
import { projectItem } from "./projectItem";
import { projects } from "./projects";
import { faqItem } from "./faqItem";
import { faq } from "./faq";

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
