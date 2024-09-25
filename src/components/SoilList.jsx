import React from "react";

const SoilList = () => {
  return (
    <div className="container px-4 py-5">
      <h2 className="pb-2 border-bottom">Soil Name</h2>

      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div className="col d-flex flex-column align-items-start gap-2">
          <h2 className="fw-bold text-body-emphasis">Soil clasifications</h2>
          <p className="text-body-secondary">
            soil descriptions: Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Velit laborum quo excepturi deserunt recusandae
            unde qui error eligendi adipisci animi eveniet dolores earum
            perferendis, repellendus eius, necessitatibus ipsa! Facere harum ea
            dolorem natus!
          </p>
          <a href="#" className="btn btn-primary btn-lg">
            More crops
          </a>
        </div>

        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <svg className="bi" width="1em" height="1em">
                  <use xlinkHref="#collection">image</use>
                </svg>
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Crops title
              </h4>
              <p className="text-body-secondary">
                crops details: Paragraph of text beneath the heading to explain
                the heading.
              </p>
            </div>
            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <svg className="bi" width="1em" height="1em">
                  <use xlinkHref="#collection">image</use>
                </svg>
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Crops title
              </h4>
              <p className="text-body-secondary">
                crops details: Paragraph of text beneath the heading to explain
                the heading.
              </p>
            </div>
            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <svg className="bi" width="1em" height="1em">
                  <use xlinkHref="#collection">image</use>
                </svg>
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Crops title
              </h4>
              <p className="text-body-secondary">
                crops details: Paragraph of text beneath the heading to explain
                the heading.
              </p>
            </div>
            <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <svg className="bi" width="1em" height="1em">
                  <use xlinkHref="#collection">image</use>
                </svg>
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">
                Crops title
              </h4>
              <p className="text-body-secondary">
                crops details: Paragraph of text beneath the heading to explain
                the heading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilList;
