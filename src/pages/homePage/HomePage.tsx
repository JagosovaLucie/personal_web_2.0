import "./HomePage.scss";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const DOT_LINKS = [
  { path: "/", key: "home" },
  { path: "/skills", key: "skills" },
  { path: "/portfolio", key: "portfolio" },
  { path: "/career", key: "career" },
  { path: "/contact", key: "contact" },
];

const MainPage = () => {
  const { t } = useTranslation();

  const [index, setIndex] = useState(0);

  const line1 = t("home_page.hero_text_1");
  const line2 = t("home_page.hero_text_2");
  const fullText = `${line1}\n${line2}`;

  const speed = 80; // ms na znak
  const typed = fullText.slice(0, index);
  const isFinished = index >= fullText.length;

  // typewriter efekt
  useEffect(() => {
    if (index >= fullText.length) return;
    const timeoutId = globalThis.setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speed);
    // cleanup
    return () => globalThis.clearTimeout(timeoutId);
  }, [index, fullText]);

  return (
    <section className="hero-wrapper">
      <div>
        <h1 className="home-page-h1">{t("home_page.h1_text")}</h1>

        <p className="home-page-p">
          <span className="typewriter-homepage">{typed}</span>
        </p>
      </div>

      {isFinished && (
        <div className="hero-dots hero-dots-visible">
          {DOT_LINKS.map(({ path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                "hero-dot" + (isActive ? " hero-dot-active" : "")
              }
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MainPage;
