import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  const styles = {
    backgroundImage: `url(${imageUrl})`,
  };
  return (
    <div className="collection-item">
      <div className="image" style={styles}>
        {" "}
      </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
