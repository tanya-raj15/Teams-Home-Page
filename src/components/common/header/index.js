import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-menu">
        <i class="fi-rr-layout-fluid"></i>
      </div>

      <div className="header-leftFold">
        <label className="header-label">Incture Teams</label>
      </div>

      <div className="header-rightFold">
        
        <div className="header-profile">
          <img
            className="header-avatar"
            src="https://cdn-icons.flaticon.com/png/128/706/premium/706807.png?token=exp=1646068549~hmac=02109df3136b014d1d40a461f37fa63e"/>
        </div>
        
      </div>
    </div>
  );
}

export default Header;