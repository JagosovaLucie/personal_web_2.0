import "./PortfolioPage.scss";
import PorfolioCard from "../../components/portfolio/PortfolioCard";
import type { TechnologyId } from "../../components/portfolio/technologiesIcons";
import calculatorImage from "@/assets/images/portfolio/investment_calculator.jpg";
import weatherImage from "@/assets/images/portfolio/weather_app.jpg";
import cashflowImage from "@/assets/images/portfolio/cashflow_tracker.jpg";
import sestavhbImage from "@/assets/images/portfolio/sestav_hb.jpg";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";

export type Project = {
  id: string;
  image: string;
  demoLink: string;
  technologies: TechnologyId[];
  githubUrl?: string;
};

const PORTFOLIO_ITEMS: Project[] = [
  {
    id: "project1",
    image: calculatorImage,
    demoLink: "https://investmentcalculator.cz",
    technologies: ["react", "ts", "scss"],
  },
  {
    id: "project2",
    image: sestavhbImage,
    demoLink: "https://sestavhb.cz",
    technologies: ["react", "css"],
  },
  {
    id: "project3",
    image: cashflowImage,
    demoLink: "https://expense-log-app.netlify.app",
    technologies: ["react", "ts", "css", "firebase"],
    githubUrl: "https://github.com/SedlakovaLucie/cashflow-tracker",
  },
  {
    id: "project4",
    image: weatherImage,
    demoLink: "https://sunandstorm.netlify.app",
    technologies: ["react", "css"],
    githubUrl: "https://github.com/SedlakovaLucie/weather_app",
  },
];

const PortfolioPage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: "auto",
  });

  const [selectedProject, setSelectedProject] = useState(0);
  const [scrollDots, setScrollDots] = useState<number[]>([]);

  const goTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  // počet teček + aktivní tečka
  const updatePagination = useCallback((api: EmblaCarouselType) => {
    setScrollDots(api.scrollSnapList());
    setSelectedProject(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const animationFrameId = requestAnimationFrame(() =>
      updatePagination(emblaApi),
    );

    emblaApi.on("reInit", updatePagination);
    emblaApi.on("select", updatePagination);
    //cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      emblaApi.off("reInit", updatePagination);
      emblaApi.off("select", updatePagination);
    };
  }, [emblaApi, updatePagination]);

  return (
    <section className="portfolio-wrapper">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {PORTFOLIO_ITEMS.map((project) => (
              <div className="embla__slide" key={project.id}>
                <PorfolioCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {scrollDots.length > 1 && (
          <div className="embla__dots">
            {scrollDots.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`embla__dot ${index === selectedProject ? "is-selected" : ""}`}
                onClick={() => goTo(index)}
                aria-label={`Přejít na pozici ${index + 1}`}
                aria-current={index === selectedProject ? "true" : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioPage;
