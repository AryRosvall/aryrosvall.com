import { useState, useEffect } from 'react';
import getData from '../utils/getData';
import config from '../../config';

export function getState(_URL) {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData(_URL)
      .then(initialState => setState(initialState.body));
  }, []);

  return state;
};

export function getInitialState() {
  const PROFILE_URL = `${config.apiUrl}api/profile`;

  const profileData = getState(PROFILE_URL);

  let profile;

  Object.values(profileData).forEach((prop) => {
    profile = prop;
  });

  const SKILLS_URL = `${config.apiUrl}api/skill`;

  const skills = getState(SKILLS_URL);

  const EXPERIENCE_URL = `${config.apiUrl}api/experience`;

  const experiences = getState(EXPERIENCE_URL);

  const ACADEMIC_URL = `${config.apiUrl}api/academic`;

  const academic = getState(ACADEMIC_URL);

  const LANGUAGE_URL = `${config.apiUrl}api/language`;

  const languages = getState(LANGUAGE_URL);

  const PROJECT_URL = `${config.apiUrl}api/project`;

  const projects = getState(PROJECT_URL);

  return {
    profile,
    skills,
    experiences,
    academic,
    languages,
    projects,

  };
}
