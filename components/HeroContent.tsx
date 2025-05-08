import SocialIcons from "@/components/SocialIcons";
import { PortableText } from "next-sanity";
import { Hero as HeroContentType } from "@/sanity/types";
import CustomButton from "./CustomButton";

export type HeroProps = {
  heroContent: HeroContentType;
};

const HeroContent = ({ heroContent }: HeroProps) => {
  return (
    <div className="flex items-center justify-center lg:max-xl:gap-4">
      <div className="hidden lg:block">
        <SocialIcons />
      </div>

      <div className="hero-wrapper">
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-secondaryColor mb-2 font-normal">
              Hi my name is
            </h3>

            <h1 className="gradient-animate font-bold">
              {heroContent.mainTitle}
            </h1>

            <h1 className="text-textColor font-bold">
              {heroContent.secondaryTitle?.slice(0, 16)} <br />
              {heroContent.secondaryTitle?.slice(16, -1)}
            </h1>
          </div>

          <div>
            <PortableText
              value={heroContent.subtitle || []}
              components={{
                marks: {
                  strong: ({ children }) => <span>{children}</span>,
                },
              }}
            />
          </div>

          <CustomButton text={heroContent.ctaText} />

          <div className="block lg:hidden">
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
