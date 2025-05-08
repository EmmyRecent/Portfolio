import { urlFor } from "@/sanity/lib/image";
import { ProjectItem as ProjectItemType } from "@/sanity/types";
// import { motion } from "motion/react";
import * as motion from "motion/react-client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type ProjectContentItemProps = {
  projectContentItem: ProjectItemType[];
};

const ProjectItem = async ({ projectContentItem }: ProjectContentItemProps) => {
  return (
    <Carousel className="w-full overflow-x-hidden lg:overflow-x-visible">
      <CarouselContent>
        {projectContentItem.map((contentItem, index) => (
          <CarouselItem
            key={index}
            className="rounded-round bg-primaryColor relative min-h-[400px]  md:min-h-[500px] lg:min-h-[600px]"
          >
            <Link href={contentItem.link ?? ""}>
              <div className="relative max-md:h-full w-full group">
                <div className="relative h-full w-full md:max-w-[75%] lg:max-w-[65%] rounded-round overflow-hidden">
                  <Image
                    src={
                      contentItem.image ? urlFor(contentItem.image).url() : ""
                    }
                    alt={contentItem.title ?? ""}
                    width={865.42}
                    height={463}
                    className="h-full w-full object-cover"
                  />

                  {/* Dark overlay only on large screens */}
                  <div className="absolute inset-0 hidden md:block bg-[#191818]/35 group-hover:bg-[#191818]/0 duration-200 ease-in-out" />
                </div>

                <div className="absolute inset-0 flex h-full w-full flex-col items-end justify-center gap-3 overflow-hidden bg-[#191818]/60 p-3 sm:p-4 md:bg-transparent lg:p-5">
                  <p className="text-secondaryColor sm:text-md font-regular text-sm capitalize">
                    Recent Project
                  </p>

                  <p className="text-md font-bold text-white sm:text-lg">
                    {contentItem.title}
                  </p>

                  <div className="bg-secondaryColor rounded-round w-full max-w-[350px] p-2 sm:max-w-[450px] sm:px-3 lg:max-w-[550px]">
                    <p className="text-primaryColor sm:text-md text-sm font-medium">
                      {contentItem.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 font-medium">
                    {contentItem.techStack?.map((stack, index) => (
                      <p className="text-xs" key={index}>
                        {stack}
                      </p>
                    ))}
                  </div>

                  <Link href={contentItem.link ?? ""}>
                    <motion.i
                      whileHover={{ scale: 1.4 }}
                      className="bx bx-link-external text-lg text-white lg:text-xl hover:text-secondaryColor duration-100"
                    ></motion.i>
                  </Link>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

// TODO: Make the buttons only display on large screens and make them a different button.
// TODO: something here...

export default ProjectItem;
