import React from 'react';
import '../assets/styles/components/Profile.styl';

const Profile = (props) => {

  const { profileTitle, avatar, description } = props;

  return (
    <section id='Profile' className='Profile'>
      <div className='Profile__Container'>
        <div className='Profile__Title'>
          <h1>About Me</h1>
          <h2>{profileTitle}</h2>
          <hr />
        </div>
        <div className='Profile__Description'>
          <figure>
            <img src={avatar} alt='Arantxa Rosas' />
          </figure>
          <p>
            {description}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Profile;
