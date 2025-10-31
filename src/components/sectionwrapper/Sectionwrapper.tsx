import React, { useEffect, useRef, type ReactNode } from "react";
import { useColor } from "../../contexts/ColorContext";

interface SectionWrapperProps {
  children: ReactNode;
  backgroundColor?: string;
  textColor?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  backgroundColor = "black",
  textColor = "white",
}) => {
  const { setTextColor } = useColor();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextColor(textColor);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setTextColor, textColor]);

  return (
    <div ref={sectionRef} style={{ backgroundColor }} className="section-wrapper" >
      {children}
    </div>
  );
};

export default SectionWrapper;
