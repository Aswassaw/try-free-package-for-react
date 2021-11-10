import React from "react";
import Typewriter from "typewriter-effect";

const index = () => {
  return (
    <div>
      <h1>Teks Diam!</h1>
      <div style={{ fontSize: "50px" }}>
        {/* Typewriter dengan onInit props */}
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString(`<i>Teks Berjalan!</i>`)
              // .callFunction(() => alert("Teks Berjalan telah berjalan!"))
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(1000)
              .typeString(`<strong>Manusia Api!</strong>`)
              // .callFunction(() => alert("Manusia Api telah berjalan!"))
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
          options={{
            loop: true,
          }}
        />

        {/* Typewriter dengan options props */}
        <Typewriter
          options={{
            pauseFor: 2000,
            strings: [
              "Nama saya Andry Pebrianto!",
              "Saya adalah seorang Front-End Developer!",
              "Saya adalah seorang Back-End Developer",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default index;
