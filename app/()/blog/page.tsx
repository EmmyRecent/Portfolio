import Nav from "@/components/Nav";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Nav />

      <main>
        <section>
          <div className="main-wrappers flex flex-col items-center justify-center">
            <Image
              src="/build.png"
              alt="Build image"
              width={400}
              height={400}
              className="w-full"
            />

            <h2 className="gradient-animate text-xl md:text-2xl">
              Coming Soon...
            </h2>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
