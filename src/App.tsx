import React, { useEffect, useRef } from "react";
import "./App.scss";
import Herosection from "./components/Herosection/Herosection";
import HeroHeader from "./components/HeroHeader/HeroHeader";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";

const App: React.FC = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = grid.getBoundingClientRect();

      const x = clientX - left;
      const y = clientY - top;

      const xPercent = (x / width) * 100;
      const yPercent = (y / height) * 100;

      grid.style.setProperty('--mouse-x', `${xPercent}%`);
      grid.style.setProperty('--mouse-y', `${yPercent}%`);
    };

    grid.addEventListener('mousemove', handleMouseMove);

    return () => {
      grid.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main className="App_container">

      <HeroHeader/>

      <section className="Herosection_container grid" ref={gridRef}>
        <div className="gridlayout-background"></div>
        <Herosection />
      </section>

      <section id="About" className="about_container">
        <About/>
      </section>

      <section id="Work" className="works_container">
        <Work/>
      </section>

      <section id="Services" className="service_container">
        <Services/>
      </section>

      <section id="Contact" className="contact_container">
        <Contact/>
      </section>

      <Footer/>

    </main>
  );
};

export default App;