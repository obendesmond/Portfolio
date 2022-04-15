import About from "../components/About";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Head from "next/head";
import Skills from "../components/Skills";

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
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
