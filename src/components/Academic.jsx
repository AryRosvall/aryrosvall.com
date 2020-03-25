import React from 'react';
import '../assets/styles/components/Academic.styl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const Academic = (props) => {
  const {
    academic = [
      {
        'degree': 'Program - Platzi Master',
        'institution': 'Platzi',
        'startDate': 'Feb 2020',
        'endDate': 'Present',
        'description': 'Intensive program for web developers',
        'location': 'Online',
        'website': 'https://platzi.com',
      },
      {
        'degree': 'Master - Project Management',
        'institution': 'Universidad Tecnológica de México',
        'startDate': '2019',
        'endDate': '2017',
        'description': '',
        'location': 'Mexico City',
        'website': 'https://www.unitec.mx',
      },
      {
        'degree': 'Bachelor - Software Engineering',
        'institution': 'Universidad Autónoma del Estado de México',
        'startDate': '2014',
        'endDate': '2009',
        'description': 'Ignacio Manuel Altamirano Basilio Award in recognition for having obtained the highest grade point average at the end of studies with 9.2, delivered by the governor of the State of Mexico Eruviel Avila Camacho.',
        'location': 'Mexico City',
        'website': 'https://www.uaemex.mx',
      },
    ],
  } = props;

  return (
    <section className='Academic'>
      <h1 className='Academic__title'>
        Academic
      </h1>
      <hr />
      {academic.map((item, index) => (
        <section key={index} className='Academic__item'>
          <div className='Academic__info'>
            <p className='Academic__institution'>
              {item.institution}
            </p>
            <p className='Academic__dates'>
              {item.startDate}
              {' '}
              -
              {' '}
              {item.startDate}
            </p>
          </div>
          <div className='Academic__description'>
            <p className='Academic__degree'>
              {item.degree}
            </p>
            <p className='Academic__degree-description'>
              {item.description}
            </p>
            <p className='Academic__location'>
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} />

                {item.location}
              </div>
              <div>
                <FontAwesomeIcon icon={faGlobeAmericas} />

                <a href={item.website} target='_blank' rel='noopener noreferrer'>{item.website}</a>
              </div>
            </p>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Academic;
