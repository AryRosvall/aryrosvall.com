import React from 'react';
import '../assets/styles/components/Profile.styl';

const Profile = (props) => {

  const {
    profile = 'I am a professional passionate about technology, with experience in the development and management of products and projects of web and mobile technologies.',
    img = 'https://i.imgur.com/33CtI2s.jpg',
  } = props;

  return (
    <section className='Profile'>
      <div className='Profile__Container'>
        <div className='Profile__Title'>
          <h1>About Me</h1>
          <h3>I'm a web developer</h3>
          <hr />
        </div>
        <div className='Profile__Description'>
          <figure>
            <img src={img} alt='' />
          </figure>
          <p>
            {profile}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Profile;
