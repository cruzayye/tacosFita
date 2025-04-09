import React, { useState, useEffect } from 'react';
import plateData from '../data/plates.json';
import './MenuSection.scss';
import Plate from '../Plate/Plate';

const MenuSection = () => {
  const [plates, setPlates] = useState([]);
  
  useEffect(() => {
    // Load the plate data from the JSON file
    setPlates(plateData.plates);
  }, []);

  return (
    <div className="menu-section">
      <div className="container">
        <div className="plates-container">
          {plates.map((plate, index) => (
            <Plate
              key={index}
              name={plate.name}
              headline={plate.headline}
              description={plate.description}
              image={plate.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;