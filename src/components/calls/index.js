import React from "react";
import Header from "../common/header";
import Sidebar from "../common/sidebar";
import LeftFold from "./left-fold/index";
import RightFold from "./right-fold/index";
import "./teams.css";

function Teams() 
{
  return (
    <div className="teams-container">
      <Header />

      <div className="teams-body">
        <div className="teams-sidebar">
          <Sidebar />
        </div>
        <div className="teams-leftFold">
          <LeftFold />
        </div>
        <div className="teams-rightFold">
          <RightFold />
        </div>
      </div>

    </div>
  );
}

export default Teams;