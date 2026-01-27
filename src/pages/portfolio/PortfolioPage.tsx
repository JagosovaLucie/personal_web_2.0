import "./PortfolioPage.scss";
import PorfolioCard from "../../components/portfolio/PortfolioCard";
import type { TechnologyId } from "../../components/portfolio/technologiesIcons";
import calculatorImage from "@/assets/images/portfolio/investment_calculator.jpg";
import weatherImage from "@/assets/images/portfolio/weather_app.jpg";
import cashflowImage from "@/assets/images/portfolio/cashflow_tracker.jpg";
import sestavhbImage from "@/assets/images/portfolio/sestav_hb.jpg";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";

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
    demoLink: "https://jagosoft-calculator.netlify.app",
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

const options: EmblaOptionsType = {
  align: "start",
  containScroll: "trimSnaps",
  loop: false,
  slidesToScroll: 1,
};

const PortfolioPage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onInit);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

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

        {/* Dots */}
        {scrollSnaps.length > 1 && (
          <div className="embla__dots" aria-label="Carousel pagination">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`embla__dot ${
                  index === selectedIndex ? "is-selected" : ""
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Přejít na pozici ${index + 1}`}
                aria-current={index === selectedIndex ? "true" : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioPage;
