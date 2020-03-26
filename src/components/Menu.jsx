import React from 'react';
import '../assets/styles/components/Menu.styl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Menu = (props) => {

  const {
    menus = ['About Me', 'Skills', 'Experience', 'Academic', 'Portfolio', 'Contact'],
  } = props;

  return (
    <nav className='Menu'>
      <div id='menuToogle'>
        <input type='checkbox' id='check' />
        <span />
        <span />
        <span />
        <ul className='menu1'>
          {
            menus.map(menu => (
              <a href='/'>
                <li className='Menu-item'>
                  {menu}
                </li>
              </a>
            ))
          }
        </ul>
      </div>
      {/*    <FontAwesomeIcon icon={faBars} /> */}
    </nav>
  );

  /* return (
    <section className='Menu'>
      <FontAwesomeIcon icon={faBars} />
      {
        menus.map(menu => (
          <p className='Menu-item'>
            {menu}
          </p>
        ))
      }
    </section>
  ); */
};

export default Menu;
