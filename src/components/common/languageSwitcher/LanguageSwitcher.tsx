import "./LanguageSwitcher.scss";
import CSflag from "@/assets/images/common/cs-flag.svg";
import ENflag from "@/assets/images/common/en-flag.svg";

type LangCode = "cs" | "en";

type LanguageSwitcherProps = {
  selectedLang: LangCode;
  onChangeLanguage: (lang: LangCode) => void;
};

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  selectedLang,
  onChangeLanguage,
}) => {
  const handleClick = () =>
    onChangeLanguage(selectedLang === "cs" ? "en" : "cs");

  return (
    <div className="language-switcher">
      <button className="lang-button" onClick={handleClick} aria-label="přepínač jazyka">
        <div
          className={`lang-flip ${selectedLang === "cs" ? "lang-flip--flipped" : ""}`}
        >
          <img
            src={CSflag}
            className="lang-face lang-face--front"
            alt="čeština"
          />
          <img
            src={ENflag}
            className="lang-face lang-face--back"
            alt="angličtina"
          />
        </div>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
