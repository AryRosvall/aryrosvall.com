import React from 'react';
import '../assets/styles/components/Profile.styl';

const Profile = (props) => {

  const { profileTitle, avatar, description } = props;

  return (
    <section className='Profile'>
      <div className='Profile__Container'>
        <div className='Profile__Title'>
          <h1>About Me</h1>
          <h3>{profileTitle}</h3>
          <hr />
        </div>
        <div className='Profile__Description'>
          <figure>
            <img src={avatar} alt='' />
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
