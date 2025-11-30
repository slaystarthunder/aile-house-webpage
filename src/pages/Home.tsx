import Hero from "../sections/Hero";
import QueerHouse from "../sections/QueerHouse";
import Community from "../sections/Community";
import Umbrella from "../sections/Umbrella";
import Events from "../sections/Events";
import Contact from "../sections/Contact";
import HamburgerMenu from "../components/navigation/HamburgerMenu";

export default function Home() {
  return (
     <>
     <HamburgerMenu />
      <Hero />
      <QueerHouse />
      <Community />
      <Umbrella /> 
      <Events />
      <Contact />
      
    </>
  );
}
