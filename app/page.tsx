import React from "react";
import { About, Hero } from "./sections";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <About />
      </main>
    </>
  );
};

export default Home;
