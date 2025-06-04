import { useEffect, useState } from "react";
import "./About.scss";

const phrases = [
  "Frontend Engineer",
  "React Developer",
  "Web Developer",
  "Visual Thinker",
  "JavaScript Lover",
  "Digital Creator",
  "Clean Coder",
  "Interface Designer",
];

const getNextPhrase = (current: string) => {
  let next = current;
  while (next === current) {
    next = phrases[Math.floor(Math.random() * phrases.length)];
  }
  return next;
};

const About = () => {
  const [currentPhrase, setCurrentPhrase] = useState(getNextPhrase(""));
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">(
    "typing"
  );

  const words = currentPhrase.split(" ");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      const currentWord = words[wordIndex];
      if (!displayed[wordIndex]) displayed[wordIndex] = "";

      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          const updated = [...displayed];
          updated[wordIndex] += currentWord[charIndex];
          setDisplayed(updated);
          setCharIndex(charIndex + 1);
        }, 100);
      } else if (wordIndex < words.length - 1) {
        timeout = setTimeout(() => {
          setWordIndex(wordIndex + 1);
          setCharIndex(0);
        }, 500);
      } else {
        timeout = setTimeout(() => setPhase("waiting"), 1500);
      }
    }

    if (phase === "waiting") {
      timeout = setTimeout(() => {
        setPhase("deleting");
        setCharIndex(words[words.length - 1].length);
        setWordIndex(words.length - 1);
      }, 1000);
    }

    if (phase === "deleting") {
      const updated = [...displayed];
      const currentWord = words[wordIndex];

      if (charIndex > 0) {
        timeout = setTimeout(() => {
          updated[wordIndex] = currentWord.slice(0, charIndex - 1);
          setDisplayed(updated);
          setCharIndex(charIndex - 1);
        }, 50);
      } else if (wordIndex > 0) {
        timeout = setTimeout(() => {
          setWordIndex(wordIndex - 1);
          setCharIndex(words[wordIndex - 1].length);
        }, 300);
      } else {
        timeout = setTimeout(() => {
          setCurrentPhrase(getNextPhrase(currentPhrase));
          setDisplayed([]);
          setCharIndex(0);
          setWordIndex(0);
          setPhase("typing");
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex, displayed, phase]);

  return (
    <div className="about">
      <article className="image_container">
        <img src="/image/madan_image.jpg" alt="" />
      </article>
      <article className="info_container">
        <span id="about" className="text_button">About</span>
        <h2 className={`rotator-text ${phase}`}>
          {displayed.map((word, wIdx) => (
            <span key={wIdx} className="word">
              {word.split("").map((char, cIdx) => (
                <span
                  key={cIdx}
                  className={`char ${cIdx < 10 ? "top10" : ""} ${
                    char === " " ? "space" : ""
                  }`}
                  style={{ animationDelay: `${wIdx * 100 + cIdx * 50}ms` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              &nbsp;
            </span>
          ))}
        </h2>

        <p className="p_paragraph">
          At <span className="uppercase">Partu WebStudio</span>, creativity meets
          code. We don’t just build{" "}
          <b>
            websites—we craft immersive digital experiences with heart, edge,
            and future-thinking design
          </b>
          . The mind behind it all is Madan K, a creative architect and tech
          visionary driven by bold ideas and a relentless passion for pushing
          digital boundaries.
        </p>
      </article>
    </div>
  );
};

export default About;
