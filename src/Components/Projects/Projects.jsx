import React from 'react'
import './Projects.css'
import Replica from '../../assets/images/replica-web.svg';
import Dom from '../../assets/images/toquen-el-dom.svg';
import Covid from '../../assets/images/impacto-covid-19.svg';
import Menta from '../../assets/images/menta-y-violeta.svg';
import Crud from '../../assets/images/crud-php.svg';
import Todo from '../../assets/images/mongo-todo-list.svg';

const Projects = () => {
  return (
    <div id="projects">
      <div className="projects-title-container">
         <h1 className="projects-title">My <span>Projects</span></h1>
      </div>
        <section className="projects">
            <div className="projects-carrusel">
                <div className="elements">
                  <a href="https://lord-mugen.github.io/ReplicaWeb/" target="_blank"><img src={Replica} alt="replicaWeb" className="projects-image replic"/></a>
                </div>
                <div className="elements">
                  <a href="https://elcabal.github.io/Toquen-el-DOM/" target="_blank"><img src={Dom} alt="toquen-el-dom" className="projects-image"/></a>
                </div>
                <div className="elements">
                  <a href="https://lord-mugen.github.io/Covid_19/" target="_blank"><img src={Covid} alt="impacto-covid" className="projects-image"/></a>
                </div>
                <div className="elements">
                  <a href="https://mentayvioleta.herokuapp.com/" target="_blank"><img src={Menta} alt="menta-y-violeta" className="projects-image"/></a>
                </div>
                <div className="elements">
                  <a href="http://consultorio-crud.infinityfreeapp.com/lo-tienes-crudo-consultorio/" target="_blank"><img src={Crud} alt="crud-php" className="projects-image"/></a>
                </div>
                <div className="elements">
                 <img src={Todo} alt="mongo-todo-list" className="projects-image"/>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default Projects