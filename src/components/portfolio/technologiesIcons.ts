import reactIcon from "@/assets/images/skills-icons/react-icon.svg";
import ts from "@/assets/images/skills-icons/typescript-icon.svg";
import cssIcon from "@/assets/images/skills-icons/css-icon.svg";
import scss from "@/assets/images/skills-icons/scss-icon.svg";
import firebase from "@/assets/images/skills-icons/firebase-icon.svg";

export type TechnologyId = "react" | "ts" | "scss" | "css" | "firebase";

type TechnologyConfig = {
  src: string;
  alt: string;
};

export const TECHNOLOGY_ICONS: Record<TechnologyId, TechnologyConfig> = {
  react: {
    src: reactIcon,
    alt: "React",
  },
  ts: {
    src: ts,
    alt: "TypeScript",
  },
  scss: {
    src: scss,
    alt: "SCSS",
  },
  css: {
    src: cssIcon,
    alt: "CSS",
  },
  firebase: {
    src: firebase,
    alt: "Firebase",
  },
};
