import About from "../components/sections/AboutSection";
import Hero from "../components/sections/HeroSection]";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Head from "next/head";
import Skills from "../components/sections/SkillsSection";
import ContactLinks from "../components/ContactLinks";

export default function Home() {
  return (
    <div className="selection:bg-myYellow selection:text-myGreen">
      <Head>
        <title>Ako Desmond Oben</title>
        <meta
          name="description"
          content="ako desmond oben's portfolio website created by ako desmond oben"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <ContactLinks />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
