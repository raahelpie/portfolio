import React from 'react';
import Card from './Card';
import viewCount from './viewCount.JPG';
import covid19 from './covid19.png';
import githubFinder from './githubFinder.png';
import gvp from './gvp.png';

const AllCards = (props) => {
  if (props.subsec === 'Work') {
    return (
      <div className='allCards'>
        <Card
          image={viewCount}
          content={'raahelpie/viewCount'}
          link='https://github.com/raahelpie/viewCount'
        />
        <Card
          image={githubFinder}
          content={'raahelpie/github-finder'}
          link='https://github.com/raahelpie/github-finder'
        />
        <Card
          image={covid19}
          content={'raahelpie/covid19'}
          link='https://github.com/raahelpie/covid19-data-visuals'
        />
      </div>
    );
  } else if (props.subsec === 'Education') {
    return (
      <div
        className='allCards'
        style={{
          marginTop: '20px',
          marginLeft: '0',
          padding: '0',
          width: '40%',
          alignItems: 'left',
          justifyContent: 'space-around',
        }}
      >
        <Card
          image={gvp}
          content={'gvpce.ac.in'}
          link='https://www.gvpce.ac.in'
        />
      </div>
    );
  }
};

export default AllCards;
