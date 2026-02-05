import "./PortfolioCard.scss";
import GithubIcon from "../../assets/images/common/GithubIcon";
import type { TechnologyId } from "../../components/portfolio/technologiesIcons";
import { TECHNOLOGY_ICONS } from "../../components/portfolio/technologiesIcons";
import { Trans, useTranslation } from "react-i18next"; // smazat pak trans
import { useState } from "react";

type Project = {
  id: string;
  image: string;
  demoLink: string;
  technologies: TechnologyId[];
  githubUrl?: string;
};

type ProjectProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectProps) => {
  const { t } = useTranslation();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const title = t(`portfolio_page.${project.id}.project_name`);
  // const description = t(`portfolio_page.${project.id}.project_description`); // pak odkomentovat

  return (
    <article className="portfolio-card">
      {/* horní část karty */}
      <a
        href={project.demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="demo-link"
      >
        <div
          className={`card-image-wrapper ${
            isImageLoaded ? "card-image--loaded" : ""
          }`}
        >
          {/* skeleton */}
          <div className="card-image-skeleton" />

          {/* obrázek po načení */}
          <img
            src={project.image}
            alt={title}
            className="card-bg-image"
            onLoad={() => setIsImageLoaded(true)}
            onError={() => setIsImageLoaded(true)}
          />

          <h2 className="card-title">{title}</h2>

          <div className="tech-icons">
            {project.technologies.map((techId) => {
              const icon = TECHNOLOGY_ICONS[techId];

              return (
                <img
                  key={techId}
                  src={icon.src}
                  alt={icon.alt}
                  className="tech-icon"
                />
              );
            })}
          </div>
        </div>
      </a>

      {/* spodní část karty */}
      <div className="card-description-wrapper">
        {/* tag p s Trans smazat */}
        <p>
          <Trans
            i18nKey={`portfolio_page.${project.id}.project_description`}
            components={{ highlight: <span className="text-highlight" /> }}
          />
        </p>

        {/* <p>{description}</p> */} {/* odkomentovat */}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <GithubIcon />
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
