import React from "react";
import "./Tabs.css";
function Tabs() {
  return (
    <div className="body">
      <div className="tabs">
        <input
          type="radio"
          className="tabs-radio"
          name="tabs-example"
          id="tab1"
          checked
        />
        <label htmlFor="tab1" className="tabs-label">
          Home
        </label>
        <div className="tabs-content">
          <div>Content for Home</div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            at magni magnam repudiandae dolore, error temporibus esse numquam,
            libero placeat expedita earum quas quod nostrum voluptatibus
            consectetur exercitationem maiores! Qui.
          </p>
        </div>
        <input
          type="radio"
          className="tabs-radio"
          name="tabs-example"
          id="tab2"
          checked
        />
        <label htmlFor="tab2" className="tabs-label">
          Contact
        </label>
        <div className="tabs-content">
          <div>Content for Contact</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ullam
            voluptatum doloribus ad est qui!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
