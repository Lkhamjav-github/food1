import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Box, Stack } from "@mui/material";
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
        />
      </Head>
      <Stack gap={16}>
        <Hero />
        <Products />
        <Contact />
        <Footer />
      </Stack>
    </>
  );
}
