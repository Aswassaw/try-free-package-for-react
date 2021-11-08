import React from "react";
import { BounceLoader, ClipLoader, BeatLoader } from "react-spinners";

const Countup = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "black",
      }}
    >
      <div>
        <BounceLoader color='white' size={40} loading />
      </div>
      <div>
        <ClipLoader color='red' size={80} loading />
      </div>
      <div>
        <BeatLoader color='blue' size={120} loading />
      </div>
    </div>
  );
};

export default Countup;
