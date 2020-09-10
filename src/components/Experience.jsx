import React from 'react';
import '../assets/styles/components/Experience.styl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const Experience = (props) => {

  const { experience } = props;

  return (
    <section id='Experience' className='Experience'>
      <div className='Experience__title'>
        <h1>Experience</h1>
        <hr />
      </div>
      {experience.map(item => (
        <section key={item._id} className='Experience__item'>
          <div className='Experience__info'>
            <p className='Experience__company'>
              {item.company}
            </p>
            <p className='Experience__dates'>
              {item.startDateLabel}
              {' '}
              -
              {' '}
              {item.endDateLabel}
            </p>
          </div>
          <div className='Experience__description'>
            <p className='Experience__job-title'>
              {item.jobTitle}
            </p>
            <p className='Experience__job-description'>
              {item.jobDescription}
            </p>
            <div className='Experience__location'>
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} />

                {item.location}
              </div>
              <div>
                <FontAwesomeIcon icon={faGlobeAmericas} />

                <a href={item.website} target='_blank' rel='noopener noreferrer' aria-label={item.company} >{item.website}</a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Experience;
