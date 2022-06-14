import React from "react";

const SideBar = ({ colors, current, setCurrent }) => {
  return (
    <div className="sidebar-container">
      <p className="sidebar-header"> My Note</p>
      <div className="color-palette">
        {colors.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`color-cover ${current === index ? "active" : " "}`}
            >
              <div style={{ background: item }} className="color-item"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
