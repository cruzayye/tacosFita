import Sidebar from "../Sidebar/Sidebar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="background-container" style={{ touchAction: "none" }}>
      <div className="content">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
