import React from "react";
import "./Locations.scss";
import Sidebar from "../Sidebar/Sidebar";

const Locations = () => {
  return (
    <div className="locations">
      <Sidebar />
      <div className="loc-divider">
        <div className="title">PIONEER PLACE</div>
        <div className="address">
          <a
            href="https://www.google.com/maps/search/?api=1&query=701+SW+6th+Ave+Portland+OR+97204"
            target="_blank"
            rel="noopener noreferrer"
            className="google-link"
          >
            701 SW 6th Ave <br /> Portland OR 97204
          </a>
          <p>Sun-Sat: 11am-7pm</p>
        </div>
      </div>

      <div className="loc-divider">
        <div className="title">HAWTHORNE</div>
        <div className="address">
          <a
            href="https://www.google.com/maps/search/?api=1&query=3757+SE+Hawthorne+Blvd+Portland+OR+97214"
            target="_blank"
            rel="noopener noreferrer"
            className="google-link"
          >
            3757 SE Hawthorne Blvd <br /> Portland, OR 97214
          </a>
          <p>Tues-Sat: 11am-8pm</p>
        </div>
      </div>

      <div className="loc-divider">
        <div className="title">THE HEIST</div>
        <div className="address">
          <a
            href="https://www.google.com/maps/search/?api=1&query=4727+SE+Woodstock+Blvd+No+1+Portland+OR+97206"
            target="_blank"
            rel="noopener noreferrer"
            className="google-link"
          >
            4727 SE Woodstock Blvd No. 1 <br /> Portland, OR 97206
          </a>
          <p>Tues-Sun: 12pm-9pm</p>
        </div>
      </div>
    </div>
  );
};

export default Locations;
