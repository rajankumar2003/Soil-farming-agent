import React from "react";
import CropList from "../components/CropList";

const Crops = () => {
  return (
    <main>
      <div className="items-container">
        {/* {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))} */}
        <CropList></CropList>
      </div>
    </main>
  );
};

export default Crops;
