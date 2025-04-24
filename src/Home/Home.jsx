import Plate from "../Plate/Plate";
import Sidebar from "../Sidebar/Sidebar";
import homePlate from "../Assets/homePlate.jpg";

import "./Home.scss";

const Home = () => {
  return (
    <div className="background-container" style={{ touchAction: "none" }}>
      <Plate
        name={"Not your average taco truck"}
        description={
          'Our menu draws from the bold, diverse flavors of LA, Northern Monterrey, and Mexico City—each bite rooted in tradition, with just the right touch of creative flair. Every tortilla is handmade daily, and you can taste the difference: soft, fresh, and the perfect foundation for our carefully crafted fillings. Whether you’re here for the classics or something a little unexpected, we’re serving tacos that will keep you coming back.'
        }
        image={homePlate}
      />
    </div>
  );
};

export default Home;
