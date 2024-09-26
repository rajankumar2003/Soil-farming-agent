import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <div className="row p-4 pb-3 pe-lg-3 pt-lg-3 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            Revolutionizing Farming with Data-Driven Insights and Smart
            Solutions
          </h1>
          <p className="lead about-para">
            At Soil Farmer Agent, our mission is to revolutionize farming by
            integrating technology and data-driven insights into agriculture. We
            believe that every farmer should have access to precise soil
            information and expert crop recommendations, no matter the scale of
            their operation. By providing detailed soil analysis, we enable
            farmers to understand their land's potential and make informed
            decisions that optimize crop yield and sustainability.
          </p>
          <p className="lead">
          Our vision is to empower farmers with the knowledge and resources they need to succeed, ensuring sustainable growth for generations to come. Join us as we transform the future of farming through innovation and collaboration!
          </p>
          
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        <img
            src="/images/hero1.jpg"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
