import { createRoot } from "react-dom/client";
import Home from "./Home/Home";
import { useState, useEffect } from "react";
// import burritosImage from './Assets/burritos.jpg';
// import tortasImage from './Assets/tortas.jpg';
// import platesImage from './Assets/plates.jpg';
import quesadillasImage from "./Assets/quesadillas.png";
// import specialtiesImage from './Assets/specialties.jpg';
import "./App.scss";
import plateData from "./data/plates.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Plate from "./Plate/Plate";

const imageMap = {
  // BURRITOS: burritosImage,
  // TORTAS: tortasImage,
  // PLATES: platesImage,
  QUESADILLAS: quesadillasImage,
  // SPECIALTIES: specialtiesImage,
};

const App = () => {
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    setPlates(plateData.plates);
  }, []);

  const plateRoutes = () => {
    return plates.map((plate) => (
      <Route
        key={plate.name}
        path={`/${plate.name}`}
        element={
          <Plate
            name={plate.name}
            headline={plate.headline}
            description={plate.description}
            image={imageMap[plate.name]}
          />
        }
      />
    ));
  };

  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {plateRoutes()}
        </Routes>
      </main>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
