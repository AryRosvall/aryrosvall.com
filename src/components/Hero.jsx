import React from 'react';
import TextyAnim from 'rc-texty';
import '../assets/styles/components/Hero.styl';

const Hero = (props) => {

  const { name, heroTitle } = props;

  return props ? (

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
            {name}
          </TextyAnim>
        </div>
        <div className='Hero__Title'>
          <TextyAnim
            type='alpha'
            mode='random'
            className=''
          >
            {heroTitle}
          </TextyAnim>
        </div>
        <div>
          <a href='#Profile' aria-label="Check out my work">Check out my work!</a>
        </div>
      </div>
    </section>
  ) : null;
};

export default Hero;
