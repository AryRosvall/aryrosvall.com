import React from 'react';
import '../assets/styles/components/Skills.styl';

const Skills = (props) => {

  const { skills } = props;

  return props ? (
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
  ) : 'Loading...';
};

export default Skills;
