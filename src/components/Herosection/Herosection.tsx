import { useEffect, useState } from "react";
import PrimaryButton from "../custom_components/Buttons/PrimaryButton";
import "./Herosection.scss";

const Herosection = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 480);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const smoothScrollTo = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const headerOffset = 0; // adjust if you have fixed header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <article className="herosection flex">
      <h1>
        {isMobile ? (
          "A Web Development and Creative Studio from the Future"
        ) : (
          <>
            <span>A Web Development</span>{" "}
            <span>and Creative Studio</span>{" "}
            <span>from the Future</span>
          </>
        )}
      </h1>

      <div className="herosection_button_contaier flex">
        <PrimaryButton
          onClick={() => smoothScrollTo("Contact")}
          buttonText="Dig into our universe"
        />
        
        <PrimaryButton
          onClick={() => smoothScrollTo("Contact")}
          customStype={"secondary"}
          buttonText="See services"
        />
      </div>
    </article>
  );
};

export default Herosection;
