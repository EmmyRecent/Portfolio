import { defineField, defineType } from "sanity";

export const serviceItems = defineType({
  name: "serviceItem",
  title: "Service Item",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Service Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "Icon", title: "Icon", type: "image" }),
  ],
});
