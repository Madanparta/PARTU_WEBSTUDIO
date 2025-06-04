import React, { useEffect, useRef, useState } from "react";
import PrimaryButton from "../custom_components/Buttons/PrimaryButton";
import "./HeroHeader.scss";

const HeroHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    const target = document.getElementById(href.substring(1));
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      closeMenu();
    }
  };

  const smoothScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <header className={`flex ${scrolled ? "scrolled" : ""}`}>
      <div className="mobile-menu-trigger" onClick={openMenu}></div>

      <nav className="desktop-nav">
        <a href="#About" onClick={smoothScroll}>About</a>
        <a href="#Work" onClick={smoothScroll}>Work</a>
        <a href="#Services" onClick={smoothScroll}>Services</a>
      </nav>

      <article>
        <h1><span>Partu</span>WebStudio</h1>
      </article>

      <div className="action_contaier">
        <PrimaryButton buttonText="Hit us up" onClick={() => smoothScrollTo("Contact")} />
      </div>

      {/* Smooth slide-in/slide-out sidebar */}
      <aside className={`overlay ${isMenuOpen ? "open" : "closed"}`}>
        <section ref={sidebarRef} aria-expanded={isMenuOpen} aria-controls="sidebar">
          <article>
            <h1><span>Partu</span>WebStudio</h1>
            <div className="close-btn" onClick={closeMenu}></div>
          </article>
          <nav>
            <a href="#About" onClick={smoothScroll}>About</a>
            <a href="#Work" onClick={smoothScroll}>Work</a>
            <a href="#Services" onClick={smoothScroll}>Services</a>
          </nav>
          <div className="action_contaier">
            <PrimaryButton buttonText="Hit us up" onClick={() => smoothScrollTo("Contact")} />
          </div>
        </section>
      </aside>
    </header>
  );
};

export default HeroHeader;