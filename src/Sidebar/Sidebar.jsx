import { useState, useEffect } from "react";
import { Close, Menu, Instagram, Phone } from "@mui/icons-material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import plateData from "../data/plates.json";
import logo from "../Assets/transparentLogo.png";
import "./Sidebar.scss";

const Navbar = styled.nav`
  position: fixed;
  top: ${({ isOpen }) =>
    isOpen ? "0" : "-100vh"}; /* Hide completely off screen */
  left: 0;
  height: 75vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  transition: top 0.3s ease-in-out;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  z-index: 2;
  border-bottom: 2px solid #b4bec9; /* Adding a border at the bottom */
`;

const MenuButton = styled.button`
  position: fixed;
  top: 25px;
  left: 15px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 2rem;
  z-index: 100;

  @media (max-width: 768px) {
    left: 10px; /* Adjust position for mobile */
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  text-align: center;
  margin-top: 3rem; /* Add some space from the top */
`;

const NavLink = styled.li`
  display: block;
  padding: 1rem 0;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  text-align: center;
  position: relative;
  list-style: none; /* Remove default bullet points */

  &:hover {
    color: #e3a45a; /* Gold on hover */
  }

  /* Add a thin underline to all but the last link */
  &:not(:last-child)::after {
    content: "";
    display: block;
    width: 80%;
    margin: 0 auto;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.6); /* Light white */
    position: absolute;
    bottom: -5px; /* Adjust spacing */
    left: 10%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Dim effect */
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
  z-index: 1;
`;

// New styled component for section headers
const SectionHeader = styled.div`
  color: #b4bec9;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 20px;
  margin-bottom: 5px;
  width: 100%;
  text-align: center;
`;

export default function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [plates, setPlates] = useState([]);

  // Load plates data when component mounts
  useEffect(() => {
    setPlates(plateData.plates);
  }, []);

  const handleHomeClick = () => {
    setIsOpen(false);
    navigate("/");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handlePlateClick = (plateName) => {
    setIsOpen(false);
    navigate(`/${plateName.toLowerCase()}`);
  };

  return (
    <div className="content">
      <div className="desktop">
        <ul>
        <li
            onClick={handleHomeClick}
          >
            HOME
          </li>
          {plates.map((plate, index) => (
            <li key={index} onClick={() => handlePlateClick(plate.name)}>
              {plate.name}
            </li>
          ))}
          <li
            onClick={() => {
              navigate("/locations");
            }}
          >
            LOCATIONS
          </li>
        </ul>
        <div className="desktop-logo" onClick={handleLogoClick}>
          <img src={logo} alt="logo" className="logo" />
        </div>
      </div>

      <div className="mobile">
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
        </MenuButton>
        <NavLink className="logo-link" onClick={handleLogoClick}>
          <img src={logo} alt="logo" className="logo" />
        </NavLink>

        <Navbar isOpen={isOpen} className="nav-bar">
          <NavLinks>
            <NavLink onClick={handleHomeClick}>HOME</NavLink>

            {/* Dynamically generated menu links from plates.json */}
            {plates.map((plate, index) => (
              <NavLink key={index} onClick={() => handlePlateClick(plate.name)}>
                {plate.name}
              </NavLink>
            ))}

            {/* Locations link */}
            <NavLink
              onClick={() => {
                setIsOpen(false);
                navigate("/locations");
              }}
            >
              LOCATIONS
            </NavLink>
          </NavLinks>
        </Navbar>
        <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
      </div>
    </div>
  );
}
