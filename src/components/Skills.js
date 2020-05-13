import React from 'react';
import react from './react-logo.png';
import js from './js-logo.png';
import css from './css-logo.png';
import html from './html-logo.png';

const Skills = () => {
  const content = 'I enjoy listening to music and coding simultaneously.';
  return (
    <div>
      <p className='sectionTitle'>Skills</p>
      <div className='bio'>{content}</div>
      <div className='skills' style={{ display: 'flex' }}>
        <div>
          <img src={react} alt='' />
        </div>
        <div>
          <img src={js} alt='' />
        </div>
        <div>
          <img src={html} alt='' />
        </div>
        <div>
          <img src={css} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
