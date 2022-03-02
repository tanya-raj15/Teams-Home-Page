import React from "react";
import "./contact-card.css";

function ContactCard({ item }) 
{
  return (
    <div className="contact-card">
      <div className="contact-top">
        <img src={item.avatar} className="contact-avatar" />

        <div className="contact-info">

          <lable className="contact-title">{item.name}</lable>
          <label className="contact-subtitle">{item.type}</label>
          
        </div>

      </div>
    </div>
  );
}

export default ContactCard;