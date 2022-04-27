import AboutSection from "../components/sections/AboutSection";
import HeroSection from "../components/sections/HeroSection";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Head from "next/head";
import SkillsSection from "../components/sections/SkillsSection";
import ContactLinks from "../components/ContactLinks";
import EducationSection from "../components/sections/EducationSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ContactSection from "../components/sections/ContactSection";
import FooterSection from "../components/sections/FooterSection";

import projects from "../data/projects";

export default function Home({ projectsData }) {
  return (
    <div
      id="home"
      className="selection:bg-white selection:text-myOrange bg-myDark"
    >
      <Head>
        <title>Ako Desmond Oben</title>
        <meta
          name="description"
          content="ako desmond oben's portfolio website created by ako desmond oben"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* <ContactLinks /> */}
      <HeroSection />
      <PortfolioSection projectsData={projectsData} />
      <AboutSection />
      <SkillsSection />
      {/* <EducationSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <ContactSection /> */}
      <FooterSection />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      projectsData: projects,
    },
  };
}
