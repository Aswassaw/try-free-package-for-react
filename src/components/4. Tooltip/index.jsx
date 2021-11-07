import React from "react";
import ReactTooltip from "react-tooltip";

const Tooltip = () => {
  return (
    <div style={{ margin: "50px" }}>
      <button data-tip='Basic Tooltip' data-for='basic'>
        Basic
      </button>
      <ReactTooltip place='top' type='dark' effect='float' id='basic' />

      <button data-tip='Success Tooltip' data-for='success'>
        Success
      </button>
      <ReactTooltip place='top' type='success' effect='solid' id='success' />
    </div>
  );
};

export default Tooltip;
