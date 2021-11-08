import React, { useState, useRef } from "react";
import ReactIdleTimer from "react-idle-timer";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const IdleTimer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const idleTimerRef = useRef(null);
  const sessionTimeRef = useRef(null);

  const onIdle = () => {
    console.log("User is idle!");
    setModalIsOpen(true);

    // Jalankan onLogout setelah 5 detik
    sessionTimeRef.current = setTimeout(onLogout, 5000);
  };

  const onLogout = () => {
    clearTimeout(sessionTimeRef.current);

    console.log("User is logout!");
    setIsLoggedIn(false);
    setModalIsOpen(false);
  };

  const onSignin = () => {
    clearTimeout(sessionTimeRef.current);

    console.log("User is signin!");
    setModalIsOpen(false);
  };

  return (
    <div>
      {isLoggedIn ? <h2>Halo Andry Pebrianto!</h2> : <h2>Halo Tamu!</h2>}
      <ReactModal isOpen={modalIsOpen}>
        <h2>Anda tidak melakukan aktivitas sejauh ini!</h2>
        <p>Anda akan segera dikeluarkan.</p>
        <div>
          <button onClick={onLogout}>Log me out</button>
          <button onClick={onSignin}>Keep me signed in</button>
        </div>
      </ReactModal>
      <ReactIdleTimer
        ref={idleTimerRef}
        timeout={10 * 1000}
        onIdle={onIdle}
      ></ReactIdleTimer>
    </div>
  );
};

export default IdleTimer;
