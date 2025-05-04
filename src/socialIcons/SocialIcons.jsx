import React from "react";
import "./SocialIcons.scss";
import { FaYelp, FaTiktok, FaInstagram, FaFacebook} from "react-icons/fa";

import { SiDoordash } from "react-icons/si";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a
        href="https://www.instagram.com/tacosfita/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61553476006489"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.yelp.com/biz/tacos-fita-portland"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYelp />
      </a>
      <a
        href="https://www.tiktok.com/@tacosfita"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTiktok />
      </a>
      <a
        href="https://www.doordash.com/store/tacos-fita-portland-25916676/27894953/?srsltid=AfmBOoo2uNPk-ZLdSop7mC99DdwnGWKkOcc4j3caOWvocSyFR7pR1CnN"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiDoordash />
      </a>
    </div>
  );
};

export default SocialIcons;
