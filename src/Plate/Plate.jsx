import React from 'react';
import './Plate.scss';
import { useNavigate } from 'react-router-dom';

const Plate = ({ name, headline, description, image }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    // Navigate to a specific menu category page
    navigate(`/menu/${name.toLowerCase()}`);
  };

  return (
    <div className="plate" onClick={handleClick}>
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