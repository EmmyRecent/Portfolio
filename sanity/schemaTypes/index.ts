import { type SchemaTypeDefinition } from "sanity";
import { hero } from "./hero";
import { about } from "./about";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, about],
};
