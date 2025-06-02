import PrimaryButton from "../custom_components/Buttons/PrimaryButton";
import "./Herosection.scss";

const Herosection = () => {
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
        <span>A Web Development</span> <span>and Creative Studio</span>{" "}
        <span>from the Future</span>
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
