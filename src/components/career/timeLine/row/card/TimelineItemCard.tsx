import { useTranslation } from "react-i18next";
import "./TimelineItemCard.scss";

type Props = {
  id: string;
  job: boolean;
  opened: boolean;
  handleToggle: () => void;
};

const TimelineItemCard = ({ id, job, opened, handleToggle }: Props) => {
  const { t } = useTranslation();
  const translationPath = `career_page.timeline.${id}`;
  const contentId = `timeline-card-content-${id}`;

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
      <button
        type="button"
        className="timeline-card-header"
        onClick={handleToggle}
        aria-expanded={opened}
        aria-controls={contentId}
      >
        <h3 className="timeline-card-title">{t(`${translationPath}.title`)}</h3>

        {/* šipka */}
        <span className="timeline-card-company-toggle">
          <span className="timeline-card-company">{t(`${translationPath}.company`)}</span>

          <span
            className={`timeline-card-toggle ${opened ? "is-open" : ""}`}
            aria-hidden="true"
          >
            <span className="timeline-card-toggle-icon" />
          </span>
        </span>
      </button>

      {/* ----------tělo karty po rozbalení */}
      <div
        id={contentId}
        className={`timeline-card-content ${opened ? "content-open" : ""}`}
      >
        <div className="timeline-card-body">
          {/* délka trvání */}
          <div className="timeline-card-row">
            <p className="timeline-card-period">{t(`${translationPath}.period`)}</p>
          </div>
          {/* náplň práce */}
          <div className="timeline-card-row">
            <p className="timeline-card-label">
              {t("career_page.timeline.description_label")}:
            </p>
            <p className="timeline-card-text">{t(`${translationPath}.description`)}</p>
          </div>
          {/* technologie */}
          <div className="timeline-card-row">
            <p className="timeline-card-label">
              {t("career_page.timeline.technologies_label")}:
            </p>
            <p className="timeline-card-text">{t(`${translationPath}.technologies`)}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TimelineItemCard;
