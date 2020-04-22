import React from 'react';
import { sendMessage } from '../utils/fetchData';
import useFormFields from '../hooks/useFormFields';
import { API_URL } from '../hooks/initialState';
import '../assets/styles/components/Contact.styl';

const Contact = () => {

  const [fields, handleFieldChange] = useFormFields({
    from: '',
    message: '',
    name: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    sendMessage(`${API_URL}api/email`, 'POST', fields)
      .then(message => console.log('handleFormSubmit -> message', message));
  };

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
        <form className='form' method='POST' onSubmit={handleFormSubmit}>
          <input type='text' name='name' id='text' placeholder='name' onChange={handleFieldChange} />
          <input type='email' name='from' id='from' placeholder='email' onChange={handleFieldChange} />
          <textarea name='message' id='textarea' placeholder='message' rows='4' cols='50' onChange={handleFieldChange} />
          <button type='submit'>Send message</button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
