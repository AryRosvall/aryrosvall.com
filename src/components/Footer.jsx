import React from 'react';
import '../styles/components/Footer.styl';

const Footer = () => {
  return (
    <footer>
      <section className='footer__contact'>
        <p>Get in touch!</p>
        <form className='form'>
          <input type='text' name='' id='' placeholder='name' />
          <input type='email' name='' id='' placeholder='email' />
          <textarea name='' id='' placeholder='message' rows='4' cols='50' />
          <button type='submit'>
          Send message
          </button>
        </form>
      </section>
      <section className='footer__social-media'>
        <a href='/' className='social_media__item'><span className='flaticon-001-facebook'>Facebook</span></a>
        <a href='/' className='social_media__item'><span className='flaticon-001-facebook'>Linkedin</span></a>
        <a href='/' className='social_media__item'><span className='flaticon-001-facebook'>Twitter</span></a>
      </section>
    </footer>
  );
};

export default Footer;
