import Head from "next/head";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="bg-myDark ">
      <Head>
        <title>Ako Desmond Oben</title>
        <meta
          name="description"
          content="ako desmond oben's portfolio website created by ako desmond oben"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {children}
    </div>
  );
}
