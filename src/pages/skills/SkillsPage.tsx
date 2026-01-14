import "./SkillsPage.scss";
import { useTranslation } from "react-i18next";
import { skill_icons } from "../../assets/images/skills-icons";
import { useState, useEffect } from "react";

const SkillsPage = () => {
  const { t } = useTranslation();
  const text = t("skills_page.loading");

  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typeSpeed = 200; // rychlost psaní
  const deleteSpeed = 80; // rychlost mazání
  const pauseAfterWrite = 700;
  const pauseAfterDelete = 400;

  const displayed = text.slice(0, index); // část textu, která se aktuálně zobrazuje

  //------------------typewriter
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    // 1) Psaní znak po znaku
    if (!isDeleting && index < text.length) {
      timeoutId = globalThis.setTimeout(() => {
        setIndex((i) => i + 1);
      }, typeSpeed);
    }

    // 2) Pauza po dopsání celého textu
    else if (!isDeleting && index === text.length) {
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
  }, [index, isDeleting, text]);

  return (
    <section className="skills-wrapper">
      <div className="icons-container">
        {skill_icons.map((icon) => (
          <img
            key={icon.id}
            src={icon.src}
            alt={icon.alt}
            className="skill-icon"
            loading="lazy"
          />
        ))}
      </div>
      <div className="loading-container">
        <p className="typewriter-skillpage">{displayed}</p>
      </div>
    </section>
  );
};

export default SkillsPage;
