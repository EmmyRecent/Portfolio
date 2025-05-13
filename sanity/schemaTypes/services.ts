import { defineField, defineType } from "sanity";

export const services = defineType({
  name: "services",
  title: "Service Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "Services",
      type: "array",
      of: [{ type: "serviceItem" }],
    }),
  ],
});
