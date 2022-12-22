import React from 'react';
import myPic from '../../images/pic-of-me.jpeg';

export default function About() {
  return (
    <div className=''>
      <h1>About Me</h1>
      <div className='row'>
        <p className='bio'>
          My name is Caleb Korson. I have a degree in chemical engineering from Michigan Tech University.
          I worked for General Motors for 4 years as a Paint Process Engineer and Automation Specialist. 
          I currently work for Consolidated Nuclear Securities as a Process Engineer, but I am looking expand 
          my skill set and branch out from engineering.
          With this in mind, I am currently taking the University of Vanderbilt Coding Bootcamp to earn a 
          certificate as a full stack web developer
        </p>
        {/* <img src={myPic} alt='Me and my wife' className='myPic'/> */}
      </div>
    </div>
  );
}
