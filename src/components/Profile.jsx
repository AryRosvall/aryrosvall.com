import React from 'react';
import '../styles/components/Profile.styl';

const Profile = (props) => {

  const {
    profession,
    profile,
  } = props;

  return (
    <section className='Profile'>
      <h1>About Me</h1>
      <h2>I'm a web developer</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, consequatur totam. Eius tenetur officia,
        necessitatibus modi perspiciatis doloribus, aspernatur voluptate natus fugiat laboriosam, aperiam blanditiis
        dignissimos et. Vel, aliquam eos.
      </p>
      <figure>
        <img
          src='https://avatars1.githubusercontent.com/u/24699675?s=460&u=131dafb86c1a64b04f71f1a1b98d46ed73866d7f&v=4'
          alt=''
        />
      </figure>
    </section>
  );
};

export default Profile;
