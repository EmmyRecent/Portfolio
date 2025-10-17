import FormField from "@/components/FormField";
import Nav from "@/components/Nav";

const Contact = () => {
  return (
    <>
      <Nav />

      <main>
        <section>
          <div className="main-wrapper flex items-center flex-col justify-center pt-20">
            <div className="border-secondaryColor rounded-round w-full max-w-[669px] border px-4 md:px-9 py-8 md:py-11">
              <h3 className="text-secondaryColor text-center font-semibold capitalize text-xl md:text-2xl mb-4">
                Contact Me
              </h3>

              <p className="text-textColor text-center font-medium">
                I create elegantly simple designs and code with passion. It&apos;s as
                straightforward as that!
              </p>

              <FormField />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
