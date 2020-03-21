import React from 'react';
import '../styles/components/Language.styl';

const Languages = (props) => {
  const {
    languages = [
      {
        'name': 'Spanish',
        'percentage': '90',
      },
      {
        'name': 'Portuguese',
        'percentage': '10',
      },
      {
        'name': 'English',
        'percentage': '60',
      },
    ],
  } = props;

  return (
    <section className='Languages'>
      <h1 className='Languages__title'>
        Languages
      </h1>
      <div className='Languages__container'>
        {languages.map(item => (
          <section key={item.name} className='Languages__item'>
            <div className='Languages__info'>
              <div className='Languages__name'>
                {item.name}
              </div>
              <div className='Languages__percentage'>
                {item.percentage}
              </div>
            </div>
            <progress max='100' value={parseInt(item.percentage.split('%'), 10)} />
          </section>
        ))}
      </div>
    </section>
  );
};

export default Languages;
