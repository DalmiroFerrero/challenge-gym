import React from 'react';

const Feature = (props) => {
  const { icon, title, text } = props.feature;

  return (
    <div className="feature">
      <img src={icon} alt="icon feacture" />

      <h2>{title}</h2>

      <p>{text}</p>
    </div>
  );
};

export default Feature;
