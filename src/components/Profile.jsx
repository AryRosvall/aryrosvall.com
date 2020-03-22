import React from 'react';
import '../styles/components/Profile.styl';

const Profile = (props) => {

  const {
    profession,
    profile,
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
            <img
              src='https://avatars1.githubusercontent.com/u/24699675?s=460&u=131dafb86c1a64b04f71f1a1b98d46ed73866d7f&v=4'
              alt=''
            />
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
