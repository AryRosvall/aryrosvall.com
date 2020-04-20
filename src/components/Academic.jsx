import React from 'react';
import '../assets/styles/components/Academic.styl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const Academic = (props) => {
  const { academic } = props;

  return academic ? (
    <section className='Academic'>
      <h1 className='Academic__title'>
        Academic
      </h1>
      <hr />
      {academic.map(item => (
        <section key={item._id} className='Academic__item'>
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
            <div className='Academic__location'>
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} />

                {item.location}
              </div>
              <div>
                <FontAwesomeIcon icon={faGlobeAmericas} />

                <a href={item.website} target='_blank' rel='noopener noreferrer'>{item.website}</a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  ) : null;
};

export default Academic;
