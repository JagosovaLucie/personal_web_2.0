import htmlIcon from "./html-icon.svg";
import cssIcon from "./css-icon.svg";
import sassIcon from "./scss-icon.svg";
import bootstrapIcon from "./bootstrap-icon.svg";
import reactIcon from "./react-icon.svg";
import typescriptIcon from "./typescript-icon.svg";
import figmaIcon from "./figma-icon.svg";
import webflowIcon from "./webflow-icon.svg";
import sql from "./SQL-icon.svg";

export const skill_icons = [
  { id: "react", src: reactIcon, alt: "React", width: 100, height: 100 },
  { id: "typescript", src: typescriptIcon, alt: "TypeScript", width: 100, height: 100 },
  { id: "html", src: htmlIcon, alt: "HTML", width: 150, height: 150 },
  { id: "css", src: cssIcon, alt: "CSS", width: 150, height: 150 },
  { id: "sass", src: sassIcon, alt: "Sass", width: 100, height: 80 },
  { id: "bootstrap", src: bootstrapIcon, alt: "Bootstrap", width: 100, height: 90 },
  { id: "sql", src: sql, alt: "SQL", width: 100, height: 90 },
  { id: "figma", src: figmaIcon, alt: "Figma", width: 100, height: 90 },
  { id: "webflow", src: webflowIcon, alt: "Webflow", width: 150, height: 150 },
] as const;
