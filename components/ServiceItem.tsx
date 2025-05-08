import { urlFor } from "@/sanity/lib/image";
import * as Schema from "@/sanity/types";
import * as motion from "motion/react-client";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

const ServiceItem = ({ title, description, Icon }: Schema.ServiceItem) => {
  return (
    <motion.li
      whileHover={{
        scale: 1.03,
        transition: {
          duration: 0.3,
        },
      }}
    >
      <Card className="bg-primaryColor border-secondaryColor w-full cursor-pointer items-center justify-center md:max-w-[520px]">
        <Image
          src={Icon ? urlFor(Icon).url() : ""}
          alt="Card Icon"
          width={70}
          height={70}
        />

        <CardContent className="flex flex-col items-center justify-center space-y-4 lg:space-y-6">
          <CardTitle className="text-secondaryColor text-center text-lg font-bold lg:text-xl">
            {title}
          </CardTitle>

          <CardDescription className="text-textColor text-md text-center font-medium">
            {description}
          </CardDescription>

          <div className="text-secondaryColor text-lg font-bold">
            {"----->>>"}
          </div>
        </CardContent>
      </Card>
    </motion.li>
  );
};

export default ServiceItem;
