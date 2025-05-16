import Footer from "@/components/Footer";
import Nav from "../components/Nav";
import { About, Faq, Hero, Next, Project, Services } from "./sections";

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
