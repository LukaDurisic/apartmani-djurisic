import { LangProvider } from "@/lib/i18n";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Apartments from "./components/Apartments";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Rules from "./components/Rules";
import Nearby from "./components/Nearby";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <LangProvider>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Apartments />
        <Amenities />
        <Gallery />
        <Location />
        <Rules />
        <Nearby />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
