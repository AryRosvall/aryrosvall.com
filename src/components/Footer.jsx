import React from 'react';
import '../assets/styles/components/Footer.styl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { mdiChevronDoubleUp, mdiGithub } from '@mdi/js';
import Icon, { Stack } from '@mdi/react';

library.add(fab);

const Footer = (props) => {

  const {
    Social = [
      {
        'name': 'twitter',
        'url': 'https://twitter.com/',
      },
      {
        'name': 'github',
        'url': 'https://github.com/',
      },
      {
        'name': 'linkedin',
        'url': 'https://www.linkedin.com/',
      },
    ],
  } = props;

  return (
    <footer>
      <div className='footer__up'>
        <i dest='Home'>
          <Stack size='50px'>
            <Icon
              path={mdiChevronDoubleUp}
              color='white'
              size='20px'
              className='mdi-chevron-double-up'
            />
          </Stack>
        </i>
      </div>
      <div className='social_media__container'>
        {Social.map(item => (
          <a className='Social__item' key={item.name} href={item.url}>
            <FontAwesomeIcon className='Social__icon' key={item.url} icon={['fab', item.name]} />
          </a>
        ))}
      </div>
      <div className='footnote'>
        ARANTXA ROSAS
        {' '}
        <span className='footnote--highlight'>©2020</span>
      </div>
    </footer>
  );
};

export default Footer;
