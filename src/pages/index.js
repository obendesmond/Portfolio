import AboutSection from "../components/sections/AboutSection";
import HeroSection from "../components/sections/HeroSection]";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Head from "next/head";
import SkillsSection from "../components/sections/SkillsSection";
import ContactLinks from "../components/ContactLinks";
import EducationSection from "../components/sections/EducationSection";

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
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
    </div>
  );
}
