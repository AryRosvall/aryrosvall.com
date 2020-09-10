import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/components/Menu.styl';

const Menu = (props) => {

  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  const {
    menus = [
      { name: 'About Me', link: 'Profile' },
      { name: 'Skills', link: 'Skills' },
      { name: 'Experience', link: 'Experience' },
      { name: 'Academic', link: 'Academic' },
      { name: 'Portfolio', link: 'Portfolio' },
      { name: 'Contact', link: 'Contact' },
    ],
  } = props;

  return menus ? (
    <div className={`sticky__container${isSticky ? ' sticky' : ''}`} ref={ref}>
      <nav className='Menu sticky__inner'>
        <div id='menuToogle'>
          <input type='checkbox' id='check' />
          <span />
          <span />
          <span />
          <ul className='menu__options'>
            {
              menus.map((menu, index) => (
                <li className='Menu__option'>
                  <a key={menu.name} href={`#${menu.link}`} aria-label={menu.name}>
                    {menu.name}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    </div>
  ) : null;
};

export default Menu;
