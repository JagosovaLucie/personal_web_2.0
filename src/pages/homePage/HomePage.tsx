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

const speed = 80; // ms na znak

const HomePage = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const line1 = t("home_page.hero_text_1");
  const line2 = t("home_page.hero_text_2");
  const heroText = `${line1}\n${line2}`;
  const typedText = heroText.slice(0, index);
  const isFinished = index >= heroText.length;

  // typewriter efekt
  useEffect(() => {
    if (index >= heroText.length) return;
    const timeoutId = globalThis.setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speed);
    // cleanup
    return () => globalThis.clearTimeout(timeoutId);
  }, [index, heroText]);

  return (
    <section className="hero-wrapper">
      <div>
        <h1 className="home-page-h1">{t("home_page.h1_text")}</h1>

        <p className="home-page-p">
          <span className="typewriter-homepage">{typedText}</span>
        </p>
      </div>

      {isFinished && (
        <div className="hero-dots hero-dots-visible">
          {DOT_LINKS.map(({ path, key }) => (
            <NavLink
              key={key}
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

export default HomePage;
