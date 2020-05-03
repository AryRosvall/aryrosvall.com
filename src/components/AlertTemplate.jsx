import React, { useState } from 'react';
import InfoIcon from './icons/InfoIcon';
import ErrorIcon from './icons/ErrorIcon';
import CloseIcon from './icons/CloseIcon';
import '../assets/styles/components/Alert.styl';

const AlertTemplate = ({ message, options }) => {

  const [showPopup, setShowPopup] = useState(false);

  const toggleShowInfoPopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className='Alert__container'>
      <div className='Alert__icon'>
        {options.type === 'info' && <InfoIcon />}
        {options.type === 'error' && <ErrorIcon />}
      </div>
      <span style={{ flex: 2 }}>{message}</span>
      <button type='button' onClick={toggleShowInfoPopup}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default AlertTemplate;
