import React from "react";
import ReactDom from "react-dom";
import Slide from "react-reveal/Slide";
import "./mobilemenu.css";

const MobileMenu = ({ items, open }) => {
  return ReactDom.createPortal(
    <>
      <Slide bottom duration={400}>
        <div className="mobileMenuWrapper">
          <div className="menuBar"></div>
          <div className="mobileMenuBlock">
            {items.map((element) => (
              <div className="mobileMenuOption">{element}</div>
            ))}
          </div>
        </div>
      </Slide>
    </>,
    document.getElementById("hamburgerMenuPortal")
  );
};

export default MobileMenu;
