import React from 'react';
import '../assets/styles/components/Projects.styl';

const Projects = (props) => {

  const { projects } = props;

  return projects ? (
    <section id='Projects' className='portfolio'>
      <h1>My recent work</h1>
      <hr />
      <section className='portfolio__container'>
        {
          projects.map(project => (
            <div key={project._id} ssclassName='porfolio__item'>
              <figure className='porfolio__item-image'>
                <img src={project.cover} alt='' />
              </figure>
              <div className='porfolio__item-overlay'>
                <span className='portfolio__item-title'>{project.title}</span>
              </div>
            </div>
          ))
        }
      </section>
    </section>
  ) : null;
};

export default Projects;
