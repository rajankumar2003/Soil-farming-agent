import React from "react";

const DistrebuterList = () => {
  return (
    <>
    <div className="item-container">
      <img className="item-image" src="/images/banner.png" alt="distributer image" />
      <div className="rating">
        5 ⭐ | 678
      </div>
      <div className="company-name">distributer  name</div>
      <div className="item-name">crop name</div>
      <div className="current-price">Phone number </div>
      <div className="price">
        <span className="current-price">Rs current prise </span>
        <span className="original-price">Rs original prize</span>
        <span className="discount">(30% OFF)</span>
      </div>
    </div>

    {/* next item */}
    <div className="item-container">
      <img className="item-image" src="/images/banner.png" alt="distributer image" />
      <div className="rating">
        5 ⭐ | 678
      </div>
      <div className="company-name">distributer  name</div>
      <div className="item-name">crop name</div>
      <div className="price">
        <span className="current-price">Rs current prise </span>
        <span className="original-price">Rs original prize</span>
        <span className="discount">(30% OFF)</span>
      </div>
    </div>
    </>
  );
};

export default DistrebuterList;
