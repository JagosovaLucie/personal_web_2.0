import "./Footer.scss";
import { useTranslation } from "react-i18next";
import GithubIcon from "../../../assets/images/common/GithubIcon";
import LinkedinIcon from "../../../assets/images/common/LinkedinIcon";
import EmailIcon from "../../../assets/images/common/EmailIcon";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-container">
      <div className="footer-icons">
        {/* GitHub ikona */}
        <a
          href="https://github.com/JagosovaLucie"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon className="footer-icon" />
        </a>
        {/* Email ikona */}
        <a href="mailto:luckasedlakova22@gmail.com" aria-label="Email">
          <EmailIcon className="footer-icon" />
        </a>
        {/* LinkedIn ikona */}
        <a
          href="https://www.linkedin.com/in/luciejagosova/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="footer-icon" />
        </a>
      </div>

      <div className="footer-text">
        &copy; {new Date().getFullYear()} {t("footer.text")}
      </div>
    </footer>
  );
};

export default Footer;
