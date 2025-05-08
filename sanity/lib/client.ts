import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";
import { About, Faq, Hero, Projects, Services } from "../types";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

// Hero content data
export const getHeroContent = async (): Promise<Hero> => {
  try {
    const result = await client.fetch<Hero>(`*[_type == "hero"][0] {
      mainTitle, 
      secondaryTitle,
      subtitle,
      ctaText,
      ctaLink
    }`);

    if (!result) throw new Error("Hero content not found!");

    return result;
  } catch (error) {
    console.error("Error fetching hero content", error);

    throw error;
  }
};

// About content data
export const getAboutContent = async (): Promise<About> => {
  try {
    const result = await client.fetch(`*[_type == "about"][0] {
      title,
      name, 
      image,
      bio
    }`);

    if (!result) throw new Error("About content not found!");

    return result;
  } catch (error) {
    console.error("Error fetching about content", error);

    throw error;
  }
};

// Services content data.
export const getServiceContent = async (): Promise<Services> => {
  try {
    const result = await client.fetch(`*[_type == "services"][0] {
      title,
      items[] {
        title,
        description,
        Icon
      }
    }`);

    if (!result) throw new Error("Service content not found!");

    return result;
  } catch (error) {
    console.error("Error fetching services content", error);

    throw error;
  }
};

// Project content data.
export const getProjectContent = async (): Promise<Projects> => {
  try {
    const result = await client.fetch(`*[_type == "projects"][0] {
      title,
      project[] {
        title,
        description,
        image,
        techStack,
        link
      }
}`);

    if (!result) throw new Error("Project content not found!");

    return result;
  } catch (error) {
    console.error("Error fetching project content", error);

    throw error;
  }
};

// FAQ content data.
export const getFaqContent = async (): Promise<Faq> => {
  try {
    const result = await client.fetch(`*[_type == "faq"][0] {
      description,
      title,
      subtitle,
      items[] {
        question,
        answer
      }
    }`);

    if (!result) throw new Error("FAQ content not found!");

    return result;
  } catch (error) {
    console.error("Error fetching FAQ content", error);

    throw error;
  }
};
