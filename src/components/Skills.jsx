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
    ],
  } = props;

  return (
    <section className='Skills'>
      <h1 className='Skills__title'>
        Skills
      </h1>
      <div className='Skills__container'>
        {skills.map(item => (
          <section key={item.name} className='Skills__item'>
            <div className='Skills__info'>
              <div className='Skills__name'>
                {item.name}
              </div>
              <div className='Skills__percentage'>
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

export default Skills;
