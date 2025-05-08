import { defineType, defineField } from "sanity";

export const about = defineType({
  name: "about",
  title: "About Section",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({ name: "image", title: "Profile Image", type: "image" }),
  ],
});
