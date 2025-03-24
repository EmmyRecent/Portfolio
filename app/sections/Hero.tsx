import SocialIcons from "@/components/SocialIcons";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-primaryColor">
      <div className="lg:main-wrapper flex items-center justify-center lg:max-xl:gap-4">
        <div className="hidden lg:block">
          <SocialIcons />
        </div>

        <div className="hero-wrapper">
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-secondaryColor mb-2 font-normal">
                Hi my name is
              </h3>

              {/* //TODO; Make name dynamic with different colors */}
              <h1 className="text-tertiaryColor font-bold">
                Chukwemeka Eziagulu.
              </h1>

              <h1 className="text-textColor font-bold">
                Web Developer & <br />
                Mobile Developer
              </h1>
            </div>

            <div className="flex flex-col space-y-4">
              <p>
                I&apos;m a{" "}
                <span className="text-secondaryColor">Software Developer</span>{" "}
                specialising in building responsive, high-performance{" "}
                <span>web and mobile applications</span>. Optimised for speed,
                accessibility, and seamless user experiences
              </p>

              <p>
                With strong problem solving skills, I excel in crafting
                exceptional digital experiences. I turn ideas into functional,
                modern solutions that help <span>businesses</span> and{" "}
                <span>individuals</span>
                grow.
              </p>
            </div>

            <Button
              variant="main"
              size="main"
              className="mr-auto cursor-pointer"
            >
              Check out my CV!
            </Button>

            <div className="block lg:hidden">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
