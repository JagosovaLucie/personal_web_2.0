import "./ContactPage.scss";
import { useTranslation } from "react-i18next";
import LinkedinIcon from "../../assets/images/common/LinkedinIcon";
import GithubIcon from "../../assets/images/common/GithubIcon";
import EmailIcon from "../../assets/images/common/EmailIcon";

const ContactPage = () => {
  const { t } = useTranslation();

  const infoLinks = [
    {
      icon: <LinkedinIcon />,
      label: t("contact_page.linkedin"),
      href: "https://www.linkedin.com/in/luciejagosova/",
    },
    {
      icon: <GithubIcon />,
      label: t("contact_page.github"),
      href: "https://github.com/JagosovaLucie",
    },
    {
      icon: <EmailIcon />,
      label: t("contact_page.email"),
      href: "mailto:luckasedlakova22@gmail.com",
    },
  ];

  return (
    <section className="contact-wrapper">
      {/* hero text */}
      <div className="contact-text">
        <p>{t("contact_page.hero_text")}</p>
      </div>
      {/* kontakt linky */}
      <div className="contact-links">
        {infoLinks.map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            className="contact-link"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-link-left">
              <span className="contact-link-icon">{icon}</span>
              <span className="contact-link-label">{label}</span>
            </div>

            <span className="contact-link-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactPage;
