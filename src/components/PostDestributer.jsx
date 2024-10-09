import React from "react";

const PostDestributer = () => {
  return (
    <div className="d-flex align-items-center py-4">
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Post Destributer</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="desName"
              placeholder="desName"
            />
            <label htmlFor="desName"> Destributer Name</label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="cropName"
              placeholder="cropName"
            />
            <label htmlFor="cropName"> Crop Name</label>
          </div>
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="desNumber"
              placeholder="desNumber"
            />
            <label htmlFor="desNumber">Phone number</label>
          </div>

          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="cropPrise"
              placeholder="cropPrise"
            />
            <label htmlFor="cropPrise">Crop Price </label>
          </div>

          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="cropDiscont"
              placeholder="cropDiscont"
            />
            <label htmlFor="cropDiscont">Crop Discont</label>
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

export default PostDestributer;
