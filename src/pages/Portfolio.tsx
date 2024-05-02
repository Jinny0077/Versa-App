import "../Portfolio.css";
import { About } from "../portfolio/portfolioComponents/about";
import { Education } from "../portfolio/portfolioComponents/education";
import { Contact } from "../portfolio/portfolioComponents/contact";
import { Footer } from "../portfolio/portfolioComponents/footer";
import { Skills } from "../portfolio/portfolioComponents/skills";

export function Portfolio() {
  return (
    <div className="portfolio">
      <header>
        <h1 className="portfolio-heading">Portfolio</h1>
      </header>
      <About />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
