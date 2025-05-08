import { defineField, defineType } from "sanity";

export const projectItem = defineType({
  name: "projectItem",
  title: "Project Item",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Project Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "image", title: "Project Image", type: "image" }),
    defineField({ name: "link", title: "Project Link", type: "url" }),
  ],
});
