import React from "react";
import "./Plate.scss";
import Sidebar from "../Sidebar/Sidebar";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: "#e3a45a",
          color: "#e3a45a",
          maxWidth: "fit-content",
          "&:hover": {
            borderColor: "#e3a45a",
            backgroundColor: "rgba(227, 164, 90, 0.04)",
          },
        },
      },
    },
  },
});

const Plate = ({ name, headline, description, image }) => {
  return (
    <div className="plate">
      <Sidebar />
      <div className="flex-container">
        <div className="left">
          <div className="plate-content">
            <h2 className="plate-title">{name}</h2>
            <h3 className="plate-headline">{headline}</h3>
            <p className="plate-description">{description}</p>
          </div>
        </div>

        {/* <div className="order-button">
        <ThemeProvider theme={theme}>
          <Button variant="outlined">ORDER NOW</Button>
        </ThemeProvider>
      </div> */}
        <div className="right">
          <div className="plate-image">
            <img src={image} alt={name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plate;
