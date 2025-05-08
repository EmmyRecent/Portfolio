import { defineField, defineType } from "sanity";

export const projects = defineType({
  name: "projects",
  title: "Project Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "project",
      title: "Projects",
      type: "array",
      of: [{ type: "projectItem" }],
    }),
  ],
});
