import React from 'react';
import '../assets/styles/components/Menu.styl';

const Menu = (props) => {

  /* const {
    menus = ['About Me', 'Skills', 'Experience', 'Academic', 'Portfolio', 'Contact'],
  } = props; */

  const {
    menus = [
      { name: 'About Me', link: 'Profile' },
      { name: 'Skills', link: 'Skills' },
      { name: 'Experience', link: 'Experience' },
      { name: 'Academic', link: 'Academic' },
      { name: 'Portfolio', link: 'Projects' },
      { name: 'Contact', link: 'Contact' },
    ],
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
              <a key={menu.name} href={`#${menu.link}`}>
                <li className='Menu-item'>
                  {menu.name}
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
