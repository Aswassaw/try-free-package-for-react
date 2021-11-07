import React from "react";
import { FcDownload, FcGraduationCap, FcLinux, FcReddit } from "react-icons/fc";
import { FaAngular, FaReact, FaVuejs } from "react-icons/fa";
import {
  MdOutlineContentCopy,
  MdOutlineError,
  MdOutlinePlayCircleFilled,
  MdOutlineVisibility,
  MdOutlineWarning,
} from "react-icons/md";
import { IconContext } from "react-icons/lib";

const index = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#343A40", size: "5rem" }}>
        {/* Flat Color Icon */}
        <div>
          <FcDownload />
          <FcGraduationCap />
          <FcReddit />
          <FcLinux />
        </div>
        {/* Font Awesome Icon */}
        <div>
          <FaReact color="#61dafb" />
          <FaVuejs color="#4FC08D" />
          <FaAngular color="#dd0031" />
        </div>
        {/* Font Material Design */}
        <div>
          <MdOutlineError />
          <MdOutlineVisibility />
          <MdOutlineContentCopy />
          <MdOutlineWarning />
          <MdOutlinePlayCircleFilled />
        </div>
      </IconContext.Provider>
    </>
  );
};

export default index;
