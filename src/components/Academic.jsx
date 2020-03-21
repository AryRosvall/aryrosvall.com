import React from 'react';
import '../styles/components/Academic.styl';

const Academic = (props) => {
  const {
    academic = [
      {
        'degree': 'Atomic Master',
        'description': ' I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms',
        'endDate': 'Jan 2017',
        'institution': 'MIT',
        'startDate': 'Jan 2018',
      },
      {
        'degree': 'Space Engineering',
        'description': 'Meow in empty rooms. Find empty spot in cupboard and sleep all day check cat door for ambush 10 times before coming in for hack. ',
        'endDate': 'Decenber 2015',
        'institution': 'Harvard',
        'startDate': 'Jan 2017',
      },
      {
        'degree': 'Engineering',
        'description': 'Meow in empty rooms. Find empty spot in cupboard and sleep all day check cat door for ambush 10 times before coming in for hack. ',
        'endDate': 'Decenber 2015',
        'institution': 'Harvard',
        'startDate': 'Jan 2017',
      },
    ],
  } = props;

  return (
    <section className='Academic'>
      <h1 className='Academic-title'>
        Academic
      </h1>
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
            <p className='Academic__description'>
              {item.description}
            </p>
            <p className='Academic__location'>
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

export default Academic;
