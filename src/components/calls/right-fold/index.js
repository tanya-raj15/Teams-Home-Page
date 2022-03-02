import React from "react";
import { TeamsContact } from "../../data/teams";
import ContactCard from "./contact-card";
import "./right-fold.css";

function RightFold() 
{
  const contacts = TeamsContact;
  
  return (
    <div className="rightFold">

      <div className="rightFold-heading">
        <label className="heading-label">Teams</label>
      </div>

      <div className="rightFold-options">
        
        
        <div className="add-button">
          <div className="add-icon">
            <i class="fi-rr-user-add"></i>
          </div>
          <label className="add-label">Add Member</label>
        </div>

        <div className="add-button">
          <div className="add-icon">
          <i class="fi fi-rr-user-delete"></i>
          </div>
          <label className="add-label">Update Member</label>
        </div>

        <div className="add-button">
          <div className="add-icon">
            <i class="fi-rr-user-remove"></i>
          </div>
          <label className="add-label">Remove Member</label>
        </div>
      </div>

      <div className="contact-list">
        {contacts.map((item) => {
          return <ContactCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default RightFold;