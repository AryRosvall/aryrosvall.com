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
        <div className='Hero__Name'>
          <TextyAnim
            type='alpha'
            mode='random'
            className=''
          >
            Hi! I'm &nbsp;
          </TextyAnim>
          <TextyAnim
            type='alpha'
            mode='random'
            className='highlight'
          >
            Arantxa Rosas
          </TextyAnim>
        </div>
        <div className='Hero__Title'>
          <TextyAnim
            type='alpha'
            mode='random'
            className=''
          >
            a full stack web developer
          </TextyAnim>
        </div>
        <div>
          <button>Check out my work!</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
