import React from 'react';
import '../assets/styles/components/Menu.styl';

const Menu = (props) => {

  const {
    email = 'ary.rosvall@gmail.com',
    website = 'aryrosvall.com',
    address = 'Ciudad de México',
  } = props;

  return (
    <section className='Menu'>
      <p className='Menu-item'>
        About Me
      </p>
      <p className='Menu-item'>
        Skills
      </p>
      <p className='Menu-item'>
        Experience
      </p>
      <p className='Menu-item'>
        Academic
      </p>
      <p className='Menu-item'>
        Portfolio
      </p>
      <p className='Menu-item'>
        Contact
      </p>
    </section>
  );
};

export default Menu;
