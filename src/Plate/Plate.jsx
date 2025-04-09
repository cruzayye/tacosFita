import React from 'react';
import './Plate.scss';
import Sidebar from '../Sidebar/Sidebar';

const Plate = ({ name, headline, description, image }) => {
  

  return (
    <div className="plate" >
      <Sidebar />
      <div className="plate-content">
        <h2 className="plate-title">{name}</h2>
        <h3 className="plate-headline">{headline}</h3>
        <p className="plate-description">{description}</p>
      </div>
      <div className="plate-image">
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default Plate;