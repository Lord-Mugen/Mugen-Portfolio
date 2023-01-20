import React from "react";
import "./Projects.css";
import Dom from "../../assets/images/toquen-el-dom.svg";
import Covid from "../../assets/images/impacto-covid-19.svg";
import Avia from "../../assets/images/avia.svg";
import chiwi from "../../assets/images/chiwi.svg";
import aranda from "../../assets/images/aranda.svg";
import news from "../../assets/images/news-homepage.svg";

const Projects = () => {
  return (
    <div id="projects">
      <div className="projects-title-container">
        <h1 className="projects-title">
          My <span>Proyects</span>
        </h1>
      </div>
      <section className="projects">
        <div className="projects-carrusel">
          <div className="elements">
            <a
              href="https://elcabal.github.io/Toquen-el-DOM/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Dom} alt="toquen-el-dom" className="projects-image" />
            </a>
          </div>
          <div className="elements">
            <a
              href="https://avia-test-three.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Avia} alt="avia-test" className="projects-image" />
            </a>
          </div>
          <div className="elements">
            <a
              href="https://news-homepage-ivory-eight.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <img src={news} alt="news-homepage" className="projects-image" />
            </a>
          </div>

          <div className="elements">
            <a
              href="https://lord-mugen.github.io/Covid_19/tracker.html"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Covid} alt="impacto-covid" className="projects-image" />
            </a>
          </div>
          <div className="elements">
            <a
              href="https://aranda-test.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={aranda} alt="aranda test" className="projects-image" />
            </a>
          </div>
          <div className="elements">
            <a
              href="http://safe-forest-97695.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={chiwi}
                alt="chiwiAcademy"
                className="projects-image replic"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
