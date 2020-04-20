import { useState, useEffect } from 'react';
import getData from '../utils/getData';

export function getState(_URL) {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData(_URL)
      .then(initialState => setState(initialState.body));
  }, []);

  return state;
};

export function getInitialState() {
  const PROFILE_URL = 'http://localhost:3000/api/profile';

  const profileData = getState(PROFILE_URL);

  let profile;

  Object.values(profileData).forEach((prop) => {
    profile = prop;
  });

  const SKILLS_URL = 'http://localhost:3000/api/skill';

  const skills = getState(SKILLS_URL);

  const EXPERIENCE_URL = 'http://localhost:3000/api/experience';

  const experiences = getState(EXPERIENCE_URL);

  const ACADEMIC_URL = 'http://localhost:3000/api/academic';

  const academic = getState(ACADEMIC_URL);

  const LANGUAGE_URL = 'http://localhost:3000/api/language';

  const languages = getState(LANGUAGE_URL);

  const PROJECT_URL = 'http://localhost:3000/api/project';

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
