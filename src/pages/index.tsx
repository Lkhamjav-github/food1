import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}
