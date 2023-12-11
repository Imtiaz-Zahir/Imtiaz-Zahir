import AOS from "aos";
import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Project,
  Skill,
  ScrollUp,
  ParticlesContainer
} from "./components";

AOS.init({
  duration: 500,
  offset: 50,
});

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Experience />
      <Contact />
      <Footer />
      <ScrollUp />
      <ParticlesContainer />
    </>
  );
}
