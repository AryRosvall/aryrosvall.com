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

const API_URL = config.apiUrl || 'https://a3a5e0cf.ngrok.io/';

export function getInitialState() {

  const PROFILE_URL = `${API_URL}api/profile`;

  const profileData = getState(PROFILE_URL);

  let profile;

  Object.values(profileData).forEach((prop) => {
    profile = prop;
  });

  const SKILLS_URL = `${API_URL}api/skill`;

  const skills = getState(SKILLS_URL);

  const EXPERIENCE_URL = `${API_URL}api/experience`;

  const experiences = getState(EXPERIENCE_URL);

  const ACADEMIC_URL = `${API_URL}api/academic`;

  const academic = getState(ACADEMIC_URL);

  const LANGUAGE_URL = `${API_URL}api/language`;

  const languages = getState(LANGUAGE_URL);

  const PROJECT_URL = `${API_URL}api/project`;

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
