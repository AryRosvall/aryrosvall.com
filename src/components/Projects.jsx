import React from 'react';
import '../assets/styles/components/Projects.styl';

const Projects = (props) => {

  const {
    projects = [
      {
        '_id': '1',
        'cover': 'https://i.imgur.com/juA2KWr.png',
        'title': 'Xiinbal',
        'description': '',
      },
      {
        '_id': '2',
        'cover': 'https://i.imgur.com/Mlh3qRo.png',
        'title': 'Burger Queen',
        'description': '',
      },
    ],
  } = props;

  return (
    <section className='portfolio'>
      <h1>My recent work</h1>
      <hr />
      <section className='portfolio__container'>
        {
          projects.map(project => (

            <div className='porfolio__item'>
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
  );
};

export default Projects;
