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

export default function Home() {
  return (
    <div className="selection:bg-white selection:text-myOrange">
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
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
