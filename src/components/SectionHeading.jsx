import React from 'react';

const gradientStyle = {
    backgroundImage: 'linear-gradient(90deg, #6941c6ff 0%, #ffadb9ff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)',
  };

const SectionHeading = ({ title }) => (
    
   
  <div className="text-center">
    <div className="text-xl font-bold">
      <span style={gradientStyle}>{title}</span>
    </div>
  </div>
);

export default SectionHeading;
