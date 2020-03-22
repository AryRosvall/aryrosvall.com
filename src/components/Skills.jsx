import React from 'react';
import '../styles/components/Skills.styl';

const Skills = (props) => {
  const {
    skills = [
      {
        'name': 'babbab',
        'percentage': '75',
      },
      {
        'name': 'CSS',
        'percentage': '25',
      },
      {
        'name': 'JavaScript',
        'percentage': '55',
      },
      {
        'name': 'React',
        'percentage': '90',
      },
      {
        'name': 'babbab',
        'percentage': '75',
      },
      {
        'name': 'CSS',
        'percentage': '25',
      },
      {
        'name': 'JavaScript',
        'percentage': '55',
      },
      {
        'name': 'React',
        'percentage': '90',
      },
      {
        'name': 'babbab',
        'percentage': '75',
      },
      {
        'name': 'CSS',
        'percentage': '25',
      },
      {
        'name': 'JavaScript',
        'percentage': '55',
      },
      {
        'name': 'React',
        'percentage': '3',
      },
      {
        'name': 'babbab',
        'percentage': '4',
      },
      {
        'name': 'CSS',
        'percentage': '1',
      },
      {
        'name': 'JavaScript',
        'percentage': '2.3',
      },
      {
        'name': 'React',
        'percentage': '5',
      },
    ],
  } = props;

  return (
    <section className='Skills'>
      <h1 className='Skills__title'>
        Skills
      </h1>
      <hr />
      <div className='Skills__container'>
        {skills.map(item => (
          <section key={item.name} className='Skills__item'>
            <div className='Skills__info'>
              <div className='Skills__name'>
                {item.name}
              </div>
              <div className='Skills__percentage'>
                <div className='Stars' style={{ '--rating': parseInt(item.percentage.split('%'), 10) }} />
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Skills;
