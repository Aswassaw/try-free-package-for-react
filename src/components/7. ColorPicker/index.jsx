import React, { useState } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = () => {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("#fff");

  return (
    <div style={{ margin: "20px" }}>
      <button onClick={() => setShow(!show)}>
        {!show ? "Show" : "Hidden"}
      </button>
      <br /><br />
      {show && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <ChromePicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
          <p>You picked {color}</p>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
