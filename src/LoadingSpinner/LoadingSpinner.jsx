import lionLogo from "../Assets/logo2.jpg"; // Update with correct path to your logo
import "./LoadingSpinner.scss"

const LoadingSpinner = () => (
  <div className="logo-spinner-container">
    <img src={lionLogo} alt="Lion Mane Barber Co Logo" className="pulsing-logo" />
  </div>
);

export default LoadingSpinner;
