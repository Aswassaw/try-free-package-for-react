import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={closeToast}>Close</button>
      <button onClick={() => alert("Manusia Api!")}>Alert</button>
    </div>
  );
};

toast.configure();
const index = () => {
  const notify = () => {
    toast("Basic Notification", { position: toast.POSITION.TOP_LEFT });
    toast.success("Success Notification", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });
    toast.info("Info Notification", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
    });
    toast.warn(<CustomToast />, "Warning Notification", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    toast.error("Error Notification", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast("Basic Notification", { position: toast.POSITION.BOTTOM_LEFT });
  };

  return (
    <div>
      <button style={{ marginTop: "20px" }} onClick={notify}>
        Notify!
      </button>
    </div>
  );
};

export default index;
