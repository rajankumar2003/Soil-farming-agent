import React from "react";


const CropList = () => {
  return (
    <>
      <div className="item-container">
        <img className="item-image" src="/images/banner.png" alt="crop image" />
        <div className="company-name"> crop name </div>
        <div className="item-name"> Soil name </div>
        <p className="text-body-secondary">
          crops details: Paragraph of text beneath the heading to explain the
          heading.
        </p>
        <div className="price"></div>
      </div>

      {/* next item */}

      <div className="item-container">
        <img className="item-image" src="/images/banner.png" alt="crop image" />
        <div className="company-name"> crop name </div>
        <div className="item-name"> Soil name </div>
        <p className="text-body-secondary crop-details">
          crops details: Paragraph of text beneath the heading to explain the
          heading.
        </p>
        <div className="price"></div>
      </div>

      {/* next item */}

      <div className="item-container">
        <img className="item-image" src="/images/banner.png" alt="crop image" />
        <div className="company-name"> crop name </div>
        <div className="item-name"> Soil name </div>
        <p className="text-body-secondary">
          crops details: Paragraph of text beneath the heading to explain the
          heading.
        </p>
        <div className="price"></div>
      </div>
    </>
  );
};

export default CropList;
