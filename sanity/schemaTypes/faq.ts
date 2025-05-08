import { defineType, defineField } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "FAQs",
      type: "array",
      of: [{ type: "faqItem" }],
    }),
  ],
});
