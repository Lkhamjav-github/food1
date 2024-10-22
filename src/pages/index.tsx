import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
// import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Goo Life Lores</title>
        <meta name="description" content="Goolife" key="desc" />
        <meta property="og:image" content="goolife.png" />
        <link
          className="rounded-full"
          rel="icon"
          type="/goolife2.png"
          href="/goolife2.png"
        ></link>
      </Head>
      <Hero />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}
