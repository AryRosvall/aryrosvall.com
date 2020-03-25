import React, { useState, useEffect } from 'react';
import '../assets/styles/components/App.styl';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Languages from '../components/Languages';
import Contact from '../components/Contact';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import getData from '../utils/getData';

function getState(_URL) {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData(_URL)
      .then(initialState => setState(initialState));
  }, []);

  return state;
};

const App = () => {
  const _URL = 'http://localhost:3000/data';

  const state = getState(_URL);

  return (
    <>
      <Hero name={state.name} />
      <Menu />
      <Profile
        avatar={state.avatar}
        name={state.name}
        profession={state.profession}
        phone={state.phone}
        email={state.email}
        website={state.website}
        address={state.address}
      />
      <Skills skills={state.skills} />
      <Experience experience={state.experience} />
      <Academic academic={state.Academic} />
      <Languages languages={state.languages} />
      <Projects interest={state.interest} />
      <Contact />
      <Footer social={state.social} />
    </>
  );
};

export default App;
