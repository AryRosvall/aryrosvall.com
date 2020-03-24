import React from 'react';
import Particles from 'react-particles-js';
import TextyAnim from 'rc-texty';
import params from '../assets/particlesjs-config';
import '../assets/styles/components/Hero.styl';

const Hero = (props) => {

  return (
    <section id='Home' className='Hero'>

      {/* <Particles params={params} className='Particles' /> */}

      <div className='Hero__Container'>
        <div className='Hi'>
          <TextyAnim
            type='alpha'
            mode='random'
            className=''
          >
            Hi! I'm Arantxa Rosas
          </TextyAnim>
        </div>
        <div className='Name'>
          <TextyAnim
            type='alpha'
            mode='random'
            className='Hero__h2'
          >
            a full stack web developer
          </TextyAnim>
          <div>
            <button>Check out my work!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
