import React, { useState } from "react";
import Navbar from "./nav";
import { useSelector, useDispatch } from "react-redux";

import QuickAccess from "./quickAccess";
import { menu_option } from "../../actions/userActions";
import "./hoc.css";

const Hoc = (props) => {
  const dispatch = useDispatch();
  const option = useSelector((state) =>
    state.User.menu.selectedOption ? state.User.menu.selectedOption : null
  );
  // const [quickAccessOption, setQuickAccessOption] = useState();

  return (
    <div className="homeWrapper">
      <div className="Header ">
        <Navbar />
      </div>
      <div className="homeBlock">{props.children}</div>
      <div className="quickAccessBlock">
        <QuickAccess
          setSelect={(val) => {
            console.log(val);
            dispatch(menu_option({ selectedOption: val }));
          }}
          select={option}
        />
      </div>
    </div>
  );
};

export default Hoc;
