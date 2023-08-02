import React, { useState } from "react";
import Hoc from "./components/hoc";
import Navbar from "./components/nav";
import Dashboard from "../Dashboard";
import QuickAccess from "./components/quickAccess";
import "./home.css";

const Home = () => {
  return (
    <div className="homeWrapper">
      <Hoc>
        <Dashboard />
      </Hoc>
    </div>
  );
};

export default Home;
