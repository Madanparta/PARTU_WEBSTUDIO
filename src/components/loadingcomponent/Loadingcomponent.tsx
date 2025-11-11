import { useEffect } from "react";
import "./loadingcomponent.scss";

export const Loadingcomponent = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.classList.add("loadingComponent");

    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      document.body.classList.remove("loadingComponent");
    };
  }, []);

  return <div className="loadingComponent">
    <div className="loadingcontainer">
        <h3 className="introTEXT">
            <span>Ready to </span>
            <span>Refreact </span>
            <span>Your Vision ? </span>
        </h3>

        <div className="animationBg"></div>

        <h3 className="animationText">Partu WebStudio</h3>
    </div>
  </div>;
};
