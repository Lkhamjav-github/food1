import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const scrollToHero = () => {
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProduct = () => {
    const productElement = document.getElementById("product");
    if (productElement) {
      productElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>GooLife Lores</title>
        <meta name="description" content="Goolife" key="desc" />
        <meta property="og:image" content="goolife.png" />
        <link
          className="rounded-full"
          rel="icon"
          type="/logo.png"
          href="https://scontent.fuln6-2.fna.fbcdn.net/v/t39.30808-6/441059849_122162920268062624_593798740616597924_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=b_ALVjlB08oQ7kNvgHs6qYJ&_nc_ht=scontent.fuln6-2.fna&_nc_gid=Axw3NbtxYD8HQVC4gEvlJjh&oh=00_AYDrKzgsJQ4AJTUnqEc2DVpXaZOWV3hUiTsG-PNHvnO5xQ&oe=670C2011"
        ></link>
      </Head>
      <Header
        scrollToHero={scrollToHero}
        scrollToProduct={scrollToProduct}
        scrollToContact={scrollToContact}
        scrollToFooter={scrollToFooter}
      />
      <Hero />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}
