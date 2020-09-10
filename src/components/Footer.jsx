import React from 'react';
import '../assets/styles/components/Footer.styl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { mdiChevronDoubleUp } from '@mdi/js';
import Icon, { Stack } from '@mdi/react';

library.add(fab);

const Footer = (props) => {

  const {
    Social = [
      {
        'name': 'twitter',
        'url': 'https://twitter.com/AryRosvall',
      },
      {
        'name': 'github',
        'url': 'https://github.com/AryRosvall',
      },
      {
        'name': 'linkedin',
        'url': 'https://www.linkedin.com/in/arantxarosas',
      },
    ],
  } = props;

  return (
    <footer id='Contact'>
      <div className='footer__up' >
        <a href='#Home'>
          <i dest='#Home'>
            <Stack size='50px' tabindex="0">
              <Icon
                path={mdiChevronDoubleUp}
                color='white'
                size='20px'
                className='mdi-chevron-double-up'
              />
            </Stack>
          </i>
        </a>
      </div>
      <div className='social_media__container'>
        {Social.map(item => (
          <a tabindex="-1" className='Social__item' key={item.name} href={item.url} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon tabindex="0" className='Social__icon' key={item.url} icon={['fab', item.name]} />
          </a>
        ))}
      </div>
      <div className='footnote'>
        Made with
        {' '}
        <span role='img' aria-label=''>♥️</span>
        {' '}
        by @AryRosvall
        {' '}
        <span >©2020</span>
      </div>
    </footer >
  );
};

export default Footer;
