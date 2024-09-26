import React from "react";
import DistrebuterList from "../components/DistrebuterList";

const Distrebuter = () => {
  return (
    <main>
      <div className="items-container">
        {/* {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))} */}
        <DistrebuterList></DistrebuterList>
      </div>
    </main>
  );
};

export default Distrebuter;
