import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { sendMessage } from '../utils/fetchData';
import { API_URL } from '../hooks/initialState';
import '../assets/styles/components/Contact.styl';

const Contact = () => {

  const alert = useAlert();

  const initialState = {
    from: '',
    message: '',
    name: '',
  };

  const [{ from, message, name }, setState] = useState(initialState);

  const clearState = () => {
    setState({ ...initialState });
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendMessage(`${API_URL}api/email`, 'POST', { from, message, name })
      .then(() => {
        clearState();
        alert.show('Mensaje enviado');
      });
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
          <input type='text' name='name' id='text' placeholder='name' value={name} onChange={handleFieldChange} />
          <input type='email' name='from' id='from' placeholder='email' value={from} onChange={handleFieldChange} />
          <textarea name='message' id='textarea' placeholder='message' rows='4' cols='50' value={message} onChange={handleFieldChange} />
          <button type='submit'>Send message</button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
