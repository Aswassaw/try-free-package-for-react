import React from "react";
import CountUp, { useCountUp } from "react-countup";

const Countup = () => {
  const countUpRef = React.useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    startOnMount: false,
    start: 0,
    duration: 25,
    end: 10000,
    onReset: () => console.log("Resetted!"),
    onUpdate: () => console.log("Updated!"),
    onPauseResume: () => console.log("Paused or resumed!"),
    onStart: () => console.log("Start!"),
    onEnd: () => {
      console.log("End!");
      alert("End!");
    },
  });

  return (
    <div>
      {/* useCountUp Implementation */}
      <dir>
        <div ref={countUpRef} />
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        {/* Update untuk berakhir pada 2000 */}
        <button onClick={() => update(2000)}>Update to 2000</button>
      </dir>
      <br />
      {/* Berakhir pada 200 dan berdurasi 20 detik */}
      <h1>
        <CountUp end={200} duration={5} />
      </h1>
      <br />
      {/* Dimulai dari 250, berakhir pada 1000, dan berdurasi 100 detik */}
      <h1>
        <CountUp start={250} end={1000} duration={20} />
      </h1>
      <br />
      {/* Menambahkan prefix dan decimals */}
      <h1>
        <CountUp end={500} duration={10} prefix='$' decimals={2} />
      </h1>
      <br />
      {/* Suffix sebagai kebalikan prefix */}
      <h1>
        <CountUp end={500} duration={10} suffix='IDR' decimals={2} />
      </h1>
    </div>
  );
};

export default Countup;
