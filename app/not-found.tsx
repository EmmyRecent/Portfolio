import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Nav />

      <main>
        <section>
          <div className="main-wrappers">
            <Image
              src="/build.png"
              alt="Build image"
              width={400}
              height={400}
              className="max-w-full"
            />

            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold gradient-animate">404</h1>
              <h2 className="text-2xl">Page Not Found!</h2>

              <p className="mt-4 text-md">
                The page you are looking for does not exist.
              </p>

              <p className="mt-2 text-md">
                Please check the URL or return to the{" "}
                <Link href="/" className="text-secondaryColor">
                  homepage
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
