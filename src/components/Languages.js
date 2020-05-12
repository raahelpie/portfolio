import React from 'react';
import python from './python-logo.png';
import js from './js-logo.png';
import c from './c-logo.png';

const Languages = () => {
  const content =
    'I am comfortable with Python and Javascript while I also think any language can learnt in a week or two.';
  return (
    <div>
      <p className='sectionTitle'>Languages</p>
      <div className='bio'>{content}</div>
      <div className='skills' style={{ display: 'flex' }}>
        <div>
          <img style={{ width: '170px' }} src={python} alt='' />
        </div>
        <div>
          <img src={js} alt='' />
        </div>
        <div>
          <img src={c} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Languages;
