import React, { useState } from "react";
import MobileMenu from "../../Dashboard/components/mobileMenu";
import useClickOutside from "../../Utilities/useClickOutside";
import logo from "../../images/logo.png";
import { userSignOut } from "../../Login/userAuth";
import { signout_user } from "../../actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./nav.css";

const Navbar = () => {
  const name = useSelector((state) =>
    state.User.loginInfo.firstname ? state.User.loginInfo : null
  );
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const displayDate = () => {
    let today = new Date();
    let year = today.getFullYear();
    let mm = today.getMonth() + 1;
    let day = today.getDate();
    let month = "";

    if (mm === 1) {
      month = "Jan";
    } else if (mm === 2) {
      month = "Feb";
    } else if (mm === 3) {
      month = "Mar";
    } else if (mm === 4) {
      month = "Apr";
    } else if (mm === 5) {
      month = "May";
    } else if (mm === 6) {
      month = "Jun";
    } else if (mm === 7) {
      month = "Jul";
    } else if (mm === 8) {
      month = "Aug";
    } else if (mm === 9) {
      month = "Sep";
    } else if (mm === 10) {
      month = "Oct";
    } else if (mm === 11) {
      month = "Nov";
    } else {
      month = "Dec";
    }

    let date = day + " " + month + " " + year;
    return date;
  };

  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const refMobileMenu = useClickOutside(setOpenMobileMenu);

  const menuItems = ["File", "View", "Maps", "Help", "Add Activity"];

  const handleLogout = async () => {
    let response = await userSignOut();
    if (response) {
      dispatch(signout_user);
      navigate("/");
    }
  };

  return (
    <div className="navbarWrapper">
      <div className="navbarBlock ">
        <div className="leftWrapper">
          <div className="logoBlock">
            <div>
              <img src={logo} alt="SenseGrass" className="logoImg" />
            </div>
            <div className="logoName">SenseGrass</div>
          </div>
          <div className="menuOptionsBlock">
            <div className="menuOption">File</div>
            <div className="menuOption">View</div>
            <div className="menuOption">Maps</div>
            <div className="menuOption">Help</div>
          </div>
        </div>

        <div className="actionsWrapper">
          <div className="userWrapper">
            <div className="notificationIconBlock">
              <i class="fas fa-bell"></i>
            </div>
            <div className="dateBlock">{displayDate()}</div>
            <div
              className="userNameBlock cursor-pointer"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              {name.firstname}&nbsp; {name.lastname}
            </div>

            {open ? (
              <div
                className="logoutBlock mt-5 lg:mt-8 w-28 text-center py-1 font-bold rounded"
                onClick={() => {
                  handleLogout();
                }}
              >
                Logout
              </div>
            ) : null}
            <div className="fullscreenIconBlock">
              <i class="fas fa-expand"></i>
            </div>
          </div>
          <div className="menuBlockMobile">
            <div
              className="hamburgerIcon"
              onClick={() => {
                setOpenMobileMenu((prev) => {
                  return !prev;
                });
              }}
            >
              <i class="fas fa-bars"></i>
            </div>
            <div ref={refMobileMenu}>
              {openMobileMenu ? (
                <MobileMenu items={menuItems} open={openMobileMenu} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
