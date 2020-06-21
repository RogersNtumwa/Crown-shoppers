import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageurl, size }) => {
  const styles = {
    backgroundImage: `url(${imageurl})`,
  };
  return (
    <div className={` ${size} menu-item`}>
      <div className="background-image" style={styles}></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
