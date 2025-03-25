import Title from "@/components/Title";
import Image from "next/image";
import { placeholder } from "../assets/images";

const About = () => {
  return (
    <section>
      <div className="about-wrapper justify-centers flex flex-col items-center gap-4 lg:flex-row">
        <div className="flex-1/2">
          <Title name="About Me" number="01" />

          <div className="w-full space-y-4">
            <p>
              Hey there! My name is <span>Chukwuemeka</span>, but you can call
              me <span>Emmy</span> — because why not? 😊 Everyone does!
            </p>

            <p>
              My journey into programming started in 2020 when I experimented
              with my first <span>block-based language</span>, Scratch. Funny,
              right? At the time, I had no idea this curiosity would turn into a
              full-fledged passion for coding.
            </p>

            <p>
              From secondary school to college, I’ve navigated the tech world as
              both a self-taught developer and a computing student. Along the
              way, I’ve worked on diverse projects that sharpened my expertise
              in web and mobile development. With a strong foundation in{" "}
              <span>JavaScript, React</span>, and{" "}
              <span>full-stack technologies,</span> I’m always pushing
              boundaries to create innovative, user-focused solutions.
            </p>

            <p>
              Whether it’s building dynamic applications, optimising
              performance, or crafting seamless user experiences, I love turning
              ideas into reality.
            </p>

            <p>Let’s create something awesome together! 🚀</p>
          </div>
        </div>

        <div className="about-image">
          <Image
            src={placeholder}
            alt="Profile Photo"
            width={345}
            height={307}
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
