import React from 'react';
import TextyAnim from 'rc-texty';
import '../assets/styles/components/Hero.styl';

const Hero = (props) => {

  const {
    hero = {
      name: 'Arantxa Rosas',
      title: 'a full stack web developer',
    },
  } = props;

  return (
    <section id='Home' className='Hero'>
      <div className='Hero__Container'>
        <div className='Hero__Name'>
          <TextyAnim
            type='alpha'
            mode='random'
            className=''
          >
            Hi! I&apos;m &nbsp;
          </TextyAnim>
          <TextyAnim
            type='alpha'
            mode='random'
            className='highlight'
          >
            {hero.name}
          </TextyAnim>
        </div>
        <div className='Hero__Title'>
          <TextyAnim
            type='alpha'
            mode='random'
            className=''
          >
            {hero.title}
          </TextyAnim>
        </div>
        <div>
          <button type='button'>Check out my work!</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
