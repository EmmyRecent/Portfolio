import { defineType, defineField } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({ name: "mainTitle", title: "mainTitle", type: "string" }),
    defineField({
      name: "secondaryTitle",
      title: "secondaryTitle",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({ name: "ctaText", title: "CTA Text", type: "string" }),
    defineField({ name: "ctaLink", title: "CTA Link", type: "url" }),
  ],
});
