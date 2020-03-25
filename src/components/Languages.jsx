import React from 'react';
import '../assets/styles/components/Language.styl';

const Languages = (props) => {
  const {
    languages = [
      {
        'name': 'Spanish',
        'percentage': '5',
      },
      {
        'name': 'Otro',
        'percentage': '4.5',
      },
      {
        'name': 'Portuguese',
        'percentage': '1',
      },
      {
        'name': 'English',
        'percentage': '3.5',
      },
    ],
  } = props;

  return (
    <section className='Languages'>
      <h1 className='Languages__title'>
        Languages
      </h1>
      <hr />
      <div className='Languages__container'>
        {languages.map(item => (
          <section key={item.name} className='Languages__item'>
            <div className='Languages__info'>
              <div className='Languages__name'>
                {item.name}
              </div>
              <div className='Languages__percentage'>
                <div className='Stars' style={{ '--rating': parseInt(item.percentage.split('%'), 10) }} />
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Languages;
