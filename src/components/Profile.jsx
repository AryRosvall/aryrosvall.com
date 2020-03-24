import React from 'react';
import '../assets/styles/components/Profile.styl';

const Profile = (props) => {

  const {
    profession,
    profile,
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, consequatur totam. Eius tenetur officia,
            necessitatibus modi perspiciatis doloribus, aspernatur voluptate natus fugiat laboriosam, aperiam blanditiis
            dignissimos et. Vel, aliquam eos.
            I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Profile;
