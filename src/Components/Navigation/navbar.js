import React from "react";
import logo from "../../media/image/logo/BubbleLogoGroß.svg";
import settingsIcon from "../../media/image/util/SettingsIcon.svg";
import userIcon from "../../media/image/util/UserIcon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navigation-list">
        <li className="navigation-list-item-icon">
          <embed
            src={settingsIcon}
            className="navbar-icon"
            alt="Settingsicon"
          />
        </li>
        <li className="navigation-list-item-logo">
          <embed src={logo} className="navbar-logo" alt="Bubble Logo Navbar" />
        </li>
        <li className="navigation-list-item-icon">
          <embed src={userIcon} className="navbar-icon" alt="Settingsicon" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
