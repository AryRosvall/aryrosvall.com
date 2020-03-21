import React from 'react';
import '../styles/components/Experience.styl';

const Experience = (props) => {

  const {
    experience = [
      {
        'company': 'PugStar',
        'endDate': 'Present',
        'jobDescription': "scratch the furniture. Good now the other hand, too lay on arms while you're using the keyboard.",
        'jobTitle': 'Frontend',
        'startDate': 'Jan 2020',
      },
      {
        'company': 'CatStore',
        'endDate': 'Jan 2016',
        'jobDescription': 'Meow in empty rooms lick left leg for ninety minutes, still dirty.',
        'jobTitle': 'other',
        'startDate': 'Sept 2019',
      },
      {
        'endDate': 'Jan 2016',
        'jobDescription': 'Meow in empty rooms lick left leg for ninety minutes, still dirty.',
        'jobTitle': 'Backend',
        'startDate': 'Sept 2019',
      },
    ],
  } = props;

  return (
    <section className='Experience'>
      <h1 className='Experience-title'>
        Experience
      </h1>
      {experience.map((item, index) => (
        <section key={index} className='Experience__item'>
          <div className='Experience__info'>
            <p className='Experience__company'>
              {item.company}
            </p>
            <p className='Experience__dates'>
              {item.startDate}
              {' '}
            -
              {' '}
              {item.startDate}
            </p>
          </div>
          <div className='Experience__description'>
            <p className='Experience__job-title'>
              {item.jobTitle}
            </p>
            <p className='Experience__job-description'>
              {item.jobDescription}
            </p>
            <p className='Experience__location'>
              {item.startDate}
              {' '}
            |
              {' '}
              {item.startDate}
            </p>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Experience;
