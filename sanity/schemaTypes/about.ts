import { defineType, defineField } from "sanity";

export const about = defineType({
  name: "about",
  title: "About Me",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({ name: "image", title: "Profile Image", type: "image" }),
  ],
});
