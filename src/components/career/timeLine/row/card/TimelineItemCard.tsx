import { useTranslation } from "react-i18next";
import "./TimelineItemCard.scss";

type Props = {
  id: string;
  job: boolean;
  opened: boolean;
  handleToggle: () => void;
};

const TimelineItemCard = ({
  id,
  job,
  opened,
  handleToggle,
}: Props) => {
  const { t } = useTranslation();
  const path = `career_page.timeline.${id}`;

  if (!job) {
    return (
      <article className="timeline-card-empty">
        <div>?</div>
      </article>
    );
  }

  return (
    <article className={`timeline-card ${opened ? "open-card" : ""}`}>
      {/* ----------hlavička karty */}
      <header className="timeline-card-header" onClick={handleToggle}>
        <p className="timeline-card-title">{t(`${path}.title`)}</p>

        {/* šipka */}
        <div className="timeline-card-company-toggle">
          <p className="timeline-card-company">{t(`${path}.company`)}</p>

          <button className={`timeline-card-toggle ${opened ? "is-open" : ""}`}>
            <span className="timeline-card-toggle-icon" />
          </button>
        </div>
      </header>
      {/* ----------tělo karty po rozbalení */}
      <footer className={`timeline-card-footer ${opened ? "footer-open" : ""}`}>
        <div className="timeline-card-body">
          {/* délka trvání */}
          <div className="timeline-card-row">
            <p className="timeline-card-period">{t(`${path}.period`)}</p>
          </div>
          {/* náplň práce */}
          <div className="timeline-card-row">
            <p className="timeline-card-label">
              {t("career_page.timeline.description_label")}:
            </p>
            <p className="timeline-card-text">{t(`${path}.description`)}</p>
          </div>
          {/* technologie */}
          <div className="timeline-card-row">
            <p className="timeline-card-label">
              {t("career_page.timeline.technologies_label")}:
            </p>
            <p className="timeline-card-text">{t(`${path}.technologies`)}</p>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default TimelineItemCard;
