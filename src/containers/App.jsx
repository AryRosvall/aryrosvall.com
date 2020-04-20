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
import { getInitialState } from '../hooks/initialState';

const App = () => {

  const {
    profile,
    skills,
    experiences,
    academic,
    languages,
    projects,
  } = getInitialState();

  return (
    <>
      <Hero {...profile} />
      <Menu />
      <Profile {...profile} />
      <Skills skills={skills} />
      <Experience experience={experiences} />
      <Academic academic={academic} />
      <Languages languages={languages} />
      <Projects interest={projects} />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
