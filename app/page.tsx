import { About, Faq, Hero, Next, Project, Services } from "./sections";
import Nav from "../components/Nav";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <About />
        <Services />
        <Project />
        <Faq />
        <Next />
      </main>

      <Footer />
    </>
  );
};

export default Home;
