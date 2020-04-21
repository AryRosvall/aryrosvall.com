import React from 'react';
import '../assets/styles/components/Contact.styl';

const Contact = () => {

  return (
    <section id='Contact' className='Contact'>
      <div className='Contact__deco'>
        <svg preserveAspectRatio='none' viewBox='0 0 100 102' height='75' width='100%' version='1.1' xmlns='http://www.w3.org/2000/svg' className='svgcolor-light'>
          <path d='M0 0 L50 100 L100 0 Z' fill='white' stroke='white' />
        </svg>
      </div>
      <section className='Contact__form'>
        <h1>Get in touch!</h1>
        <hr />
        <form className='form'>
          <input type='text' name='' id='text' placeholder='name' />
          <input type='email' name='' id='email' placeholder='email' />
          <textarea name='' id='textarea' placeholder='message' rows='4' cols='50' />
          <button type='submit'>Send message</button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
