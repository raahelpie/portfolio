import React from 'react';
import Card from './Card';
import viewCount from './viewCount.JPG';
import covid19 from './covid19.png';
import githubFinder from './githubFinder.png';
import gvp from './gvp.png';

const AllCards = (props) => {
  if (props.subsec == 'Work') {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
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
  } else if (props.subsec == 'Education') {
    return (
      <div
        style={{
          display: 'flex',
          marginTop: '30px',
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
