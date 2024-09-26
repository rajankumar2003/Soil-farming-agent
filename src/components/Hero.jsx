import React from "react";

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-1 py-1">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
          Empowering Farmers with Smart Soil Insights and Crop Recommendations
        </h1>
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="/images/hero2.jpg"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="  text-body-emphasis  ">
            Harness the power of soil data and expert crop suggestions to grow
            better, faster. Connect with trusted crop distributors to ensure the
            best products for your farm.
          </h2>

          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-outline-secondary  btn-lg px-4 me-md-2"
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button>
          </div>
        </div>
        <p className="lead">
          At Soil Farmer Agent, we empower farmers by providing comprehensive
          soil insights and tailored crop recommendations to enhance
          agricultural productivity. Our platform analyzes your soil's
          composition, nutrient levels, and moisture content to help you
          determine the most suitable crops for optimal growth. By leveraging
          this data, you can make informed decisions that lead to healthier
          crops and higher yields. Additionally, we connect you with trusted
          crop distributor agents, ensuring easy access to high-quality seeds
          and farming supplies, so you can cultivate the right crops at the
          right time. Start growing smarter with our expert guidance today!
        </p>
      </div>
    </div>
  );
};

export default Hero;
