import { GithubIcon, InstagramIcon, LinkedInIcon } from "./Footericons";
import "./Footer.scss";

const Footer = () => {
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const href = e.currentTarget.getAttribute('href');
    if (!href || href === "#" || !href.startsWith("#")) return;

    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 0;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer>

      <section className="footer_logo_container">
        <img src="/logos/android-chrome-192x192.png" alt="logo" loading="lazy"/>
      </section>

      <section className="footer_nav_container">
        <p><a href="#About" onClick={smoothScroll}>ABOUT</a></p>
        <p><a href="#Work" onClick={smoothScroll}>WORK</a></p>
        <p><a href="#Services" onClick={smoothScroll}>SERVICES</a></p>
        <p><a href="#Contact" onClick={smoothScroll}>CONTACT</a></p>
        <p><a href="https://github.com/Madanparta/PARTU_WEBSTUDIO" target="_blank" rel="noopener noreferrer">SOURCE CODE</a></p>

      </section>

      <section className="footer_media_container">

        <article className="tradmark">© 2025 Partu WebStudio</article>

        <article className="social_media">
          <a href="https://github.com/Madanparta" target="_blank" rel="noopener noreferrer">
            <span><GithubIcon/></span>
          </a>
          <a href="https://www.instagram.com/partu_gowda/" target="_blank" rel="noopener noreferrer">
            <span><InstagramIcon/></span>
          </a>
          <a href="https://www.linkedin.com/in/madan-parta" target="_blank" rel="noopener noreferrer">
            <span><LinkedInIcon/></span>
          </a>
        </article>


        <article className="imprint_container">
          <p><a href="/imprint" target="_blank" rel="noopener noreferrer">IMPRINT</a></p>
        </article>

      </section>

    </footer>
  )
}

export default Footer;
