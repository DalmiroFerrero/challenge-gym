import React from 'react';
import Feature from './Feature';
import icon1 from '../assets/1.svg';
import icon2 from '../assets/2.svg';
import icon3 from '../assets/3.svg';
import icon4 from '../assets/4.svg';

const Features = () => {
  const features = [
    {
      icon: icon1,
      title: 'WeightLifting',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci dolor, pharetra quis volutpat eget, elementum eget turpis.'
    },
    {
      icon: icon2,
      title: 'Specific Muscle',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci dolor, pharetra quis volutpat eget, elementum eget turpis.'
    },
    {
      icon: icon3,
      title: 'Flex Your Muscle',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci dolor, pharetra quis volutpat eget, elementum eget turpis.'
    },
    {
      icon: icon4,
      title: 'Cardio Exercise',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci dolor, pharetra quis volutpat eget, elementum eget turpis.'
    }
  ];

  return (
    <div id="features" className="features-container">
      <div className="features">
        <h1>Features</h1>
        <div className="features-info">
          {features.map((feature) => (
            <Feature feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
