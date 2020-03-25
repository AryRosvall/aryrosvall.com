import React from 'react';
import '../assets/styles/components/Menu.styl';

const Menu = (props) => {

  const {
    menus = ['About Me', 'Skills', 'Experience', 'Academic', 'Portfolio', 'Contact'],
  } = props;

  return (
    <section className='Menu'>
      {
        menus.map(menu => (
          <p className='Menu-item'>
            {menu}
          </p>
        ))
      }
    </section>
  );
};

export default Menu;
