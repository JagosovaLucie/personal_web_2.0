import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import SkillsPage from "./pages/skills/SkillsPage";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import CarrerPage from "./pages/career/CarrerPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import ContactPage from "./pages/contact/ContactPage";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="career" element={<CarrerPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
