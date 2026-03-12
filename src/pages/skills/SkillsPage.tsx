import "./SkillsPage.scss";
import { useTranslation } from "react-i18next";
import { skill_icons } from "../../assets/images/skills-icons";
import { useState, useEffect } from "react";

const typeSpeed = 200; // rychlost psaní
const deleteSpeed = 80; // rychlost mazání
const pauseAfterWrite = 700;
const pauseAfterDelete = 400;

const SkillsPage = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadingText = t("skills_page.loading");
  const typedText = loadingText.slice(0, index);

  //------------------typewriter
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    // 1) Psaní znak po znaku
    if (!isDeleting && index < loadingText.length) {
      timeoutId = globalThis.setTimeout(() => {
        setIndex((i) => i + 1);
      }, typeSpeed);
    }

    // 2) Pauza po dopsání celého textu
    else if (!isDeleting && index === loadingText.length) {
      timeoutId = globalThis.setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterWrite);
    }

    // 3) Mazání znak po znaku
    else if (isDeleting && index > 0) {
      timeoutId = globalThis.setTimeout(() => {
        setIndex((i) => i - 1);
      }, deleteSpeed);
    }

    // 4) Pauza po smazání všeho
    else if (isDeleting && index === 0) {
      timeoutId = globalThis.setTimeout(() => {
        setIsDeleting(false); // začni znovu psát
      }, pauseAfterDelete);
    }

    //cleanup
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [index, isDeleting, loadingText]);

  return (
    <section className="skills-wrapper">
      <div className="icons-container">
        {skill_icons.map((icon) => {
          const { id, src, alt, width, height } = icon;
          return (
            <img
              key={id}
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="skill-icon"
            />
          );
        })}
      </div>
      <div className="loading-container">
        <p className="typewriter-skillpage">{typedText}</p>
      </div>
    </section>
  );
};

export default SkillsPage;
