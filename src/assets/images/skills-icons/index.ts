import htmlIcon from "./html-icon.svg";
import cssIcon from "./css-icon.svg";
import sassIcon from "./scss-icon.svg";
import bootstrapIcon from "./bootstrap-icon.svg";
import reactIcon from "./react-icon.svg";
import typescriptIcon from "./typescript-icon.svg";
import figmaIcon from "./figma-icon.svg";
import webflowIcon from "./webflow-icon.svg";

export const skill_icons = [
  { id: "html", src: htmlIcon, alt: "HTML" },
  { id: "css", src: cssIcon, alt: "CSS" },
  { id: "sass", src: sassIcon, alt: "Sass" },
  { id: "bootstrap", src: bootstrapIcon, alt: "Bootstrap" },
  { id: "react", src: reactIcon, alt: "React" },
  { id: "typescript", src: typescriptIcon, alt: "TypeScript" },
  { id: "figma", src: figmaIcon, alt: "Figma" },
  { id: "webflow", src: webflowIcon, alt: "Webflow" },
] as const;
