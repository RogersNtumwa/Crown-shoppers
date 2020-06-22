import React, { Component } from "react";
import SHOP_DATA from "./shop.data.js";
import CollectionPreview from "../../components/preview-component/collection-preview.component";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    const { collection } = this.state;
    return (
      <div className="shop-page">
        {collection.map(({ id, ...othercollectionprops }) => (
          <CollectionPreview key={id} {...othercollectionprops} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
