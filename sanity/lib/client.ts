import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";
import { Hero } from "../types";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

// Hero content data.
export const getHeroContent = async (): Promise<Hero> => {
  const result = await client.fetch<Hero>(`*[_type == "hero"][0] {
  mainTitle, 
  secondaryTitle,
  subtitle,
  ctaText,
  ctaLink
}`);

  return result;
};
