import React from "react";
import {TeamsMenu} from "../../data/teams";
import "./left-fold.css";
import MenuItem from "./menu-item";

function LeftFold() 
{
  const menu = TeamsMenu;

  return (
   
   <div className="leftFold">
      
      <div className="leftFold-menu">
        
        <label className="menu-label">Your teams</label>
        
        <div className="menu-items">
          {menu.map((item) => 
          {
            return (
              <MenuItem
                item={item}
                isActive={item.name === "Team1" ? true : false}
              />
            );
          })}

        </div>

        <div className="add-button">
          <div className="add-icon">
            <i class="fi-rr-user-add"></i>
          </div>
          <label className="add-label">Join or create a team</label>
        </div>

      </div>

    </div>
  );
}

export default LeftFold;