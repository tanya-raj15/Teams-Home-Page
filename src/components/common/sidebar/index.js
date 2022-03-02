import React from "react";
import { SidebarBottom, SidebarData, SidebarMore } from "../../data/sidebar";
import "./sidebar.css";
import SidebarOption from "./sidebar-option";

function Sidebar() 
{
  const topOptions = SidebarData;

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div>
          {topOptions.map((option) => {
            return (
              <SidebarOption
                option={option}
                isActive={option.name === "Teams" ? true : false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;