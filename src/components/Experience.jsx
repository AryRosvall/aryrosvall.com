import React from 'react';
import '../assets/styles/components/Experience.styl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const Experience = (props) => {

  const {
    experience = [
      {
        '_id': '1',
        'jobTitle': 'Operations Manager',
        'company': 'BlueMessaging',
        'startDate': 'Apr 2017',
        'endDate': 'Present',
        'jobDescription': 'I\'m Responsible for generating customer engagement with the business, creating added value to the customer and translate the needs of the client and users into business opportunities and improvement for the business and its stakeholders.',
        'location': 'Mexico City',
        'website': 'https://www.bluemessaging.com',
      },
      {
        '_id': '2',
        'jobTitle': 'Project Leader',
        'company': 'Iké Asistencia',
        'startDate': 'Jan 2017',
        'endDate': 'Apr 2017',
        'jobDescription': 'Develop and management of web application projects. Stakeholder and project sponsors management Estimation of time, risk management and resources. Staff of 6 employees.',
        'location': 'Mexico City',
        'website': 'https://ikeasistencia.com',
      },
      {
        '_id': '3',
        'jobTitle': 'Web Developer',
        'company': 'BlueMessaging',
        'startDate': 'Apr 2017',
        'endDate': 'Present',
        'jobDescription': 'Project management of software development. Requirements gathering and direct interaction with the customer. Design and development of software using Java Web, HTML, Javascript.',
        'location': 'Mexico City',
        'website': 'https://ikeasistencia.com',
      },
      {
        '_id': '4',
        'jobTitle': 'Web Developer',
        'company': 'BlueMessaging',
        'startDate': '2012',
        'endDate': '2014',
        'jobDescription': 'Airlynk project. Development of ERP to manage both operational and governmental costs airport, for the 65 airports in Mexico and abroad. Logixpert project. Design and development of the website.VANAS project. Development of modules for the framework of eLearning for college "Vancouver Animation School" performing school management, publication of teaching materials and virtual classrooms, etc.',
        'location': 'Mexico City',
        'website': 'http://www.loomtek.com.mx',
      },
    ],
  } = props;

  return (
    <section className='Experience'>
      <div className='Experience__title'>
        <h1>Experience</h1>
        <hr />
      </div>
      {experience.map((item, index) => (
        <section key={item._id} className='Experience__item'>
          <div className='Experience__info'>
            <p className='Experience__company'>
              {item.company}
            </p>
            <p className='Experience__dates'>
              {item.startDate}
              {' '}
              -
              {' '}
              {item.endDate}
            </p>
          </div>
          <div className='Experience__description'>
            <p className='Experience__job-title'>
              {item.jobTitle}
            </p>
            <p className='Experience__job-description'>
              {item.jobDescription}
            </p>
            <div className='Experience__location'>
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} />

                {item.location}
              </div>
              <div>
                <FontAwesomeIcon icon={faGlobeAmericas} />

                <a href={item.website} target='_blank' rel='noopener noreferrer'>{item.website}</a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Experience;
