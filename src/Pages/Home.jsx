import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import Crafted from "../components/Crafted/Crafted";
import Gallery from "../components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Crafted/>
      <Gallery />
      <Contactus />
      <Footer />
       
    </>
  );
}