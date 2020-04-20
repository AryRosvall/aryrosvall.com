import React from 'react';
import '../assets/styles/components/Menu.styl';

const Menu = (props) => {

  const {
    menus = ['About Me', 'Skills', 'Experience', 'Academic', 'Portfolio', 'Contact'],
  } = props;

  return menus ? (
    <nav className='Menu'>
      <div id='menuToogle'>
        <input type='checkbox' id='check' />
        <span />
        <span />
        <span />
        <ul className='menu1'>
          {
            menus.map((menu, index) => (
              <a key={index} href='/'>
                <li className='Menu-item'>
                  {menu}
                </li>
              </a>
            ))
          }
        </ul>
      </div>
    </nav>
  ) : null;
};

export default Menu;
