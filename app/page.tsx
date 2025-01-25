"use client";

import Header from "../components/Header";
import Summary from "../components/Summary";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section className="">
      <div className="mb-5">
        <Header />
      </div>
      <div className="mb-5">
        <Summary />
      </div>
      <div className="mb-5">
        <Skills />
      </div>
      <div className="mb-5">
        <Experiences />
      </div>
      <div className="mb-5">
        <Projects />
      </div>
      <div className="mb-1">
        <Footer />
      </div>
    </section>
  );
}
