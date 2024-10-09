import React from "react";

const PostSoil = () => {
  return (
    <div className="d-flex align-items-center py-4">
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Post Soil</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="soilName"
              placeholder="soilName"
            />
            <label htmlFor="soilName"> Soil Name</label>
          </div>

          {/* <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="cropName"
              placeholder="cropName"
            />
            <label htmlFor="cropName"> Crop Name</label>
          </div> */}
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="soilClass"
              placeholder="soilClassification"
            />
            <label htmlFor="soilClass"> Soil Classification </label>
          </div>
          
          <div className="form-floating soil-text-area">
            <textarea
              className="form-control"
              rows={5}
              id="soilDes"
              placeholder="soilDescripton"
              style={{ width: '100%' }}
            />
            <label htmlFor="soilClass"> Soil Description </label>
          </div>
  
          <div className="form-floating ">
            <input
              type="file"
              className="form-control"
              id="uploadImg"
              accept="image/*"
              placeholder="uploadImg"
            />
            <label htmlFor=" form-control">Upload Image</label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Post
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
    </div>
  );
};

export default PostSoil;
