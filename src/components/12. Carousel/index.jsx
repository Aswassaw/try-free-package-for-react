import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";
import img6 from "./img/6.png";
import img7 from "./img/7.png";
import img8 from "./img/8.png";
import img9 from "./img/9.png";
import img10 from "./img/10.png";

const index = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2>User List</h2>
      <Slider {...settings}>
        <div>
          <img
            style={{ maxWidth: "200px", margin: "0 auto" }}
            src={img1}
            alt='Profile 1'
          />
          <h3>1</h3>
        </div>
        <div>
          <img
            style={{ maxWidth: "200px", margin: "0 auto" }}
            src={img2}
            alt='Profile 1'
          />
          <h3>2</h3>
        </div>
        <div>
          <img
            style={{ maxWidth: "200px", margin: "0 auto" }}
            src={img3}
            alt='Profile 1'
          />
          <h3>3</h3>
        </div>
        <div>
          <img
            style={{ maxWidth: "200px", margin: "0 auto" }}
            src={img4}
            alt='Profile 1'
          />
          <h3>4</h3>
        </div>
        <div>
          <img
            style={{ maxWidth: "200px", margin: "0 auto" }}
            src={img5}
            alt='Profile 1'
          />
          <h3>5</h3>
        </div>
        <div>
          <img
            style={{ maxWidth: "200px", margin: "0 auto" }}
            src={img6}
            alt='Profile 1'
          />
          <h3>6</h3>
        </div>
        <div>
          <img
            style={{ maxWidth: "200px", margin: "0 auto" }}
            src={img7}
            alt='Profile 1'
          />
          <h3>7</h3>
        </div>
        <div>
          <img
            style={{ maxWidth: "200px", margin: "0 auto" }}
            src={img8}
            alt='Profile 1'
          />
          <h3>8</h3>
        </div>
        <div>
          <img
            style={{ maxWidth: "200px", margin: "0 auto" }}
            src={img9}
            alt='Profile 1'
          />
          <h3>9</h3>
        </div>
        <div>
          <img
            style={{ maxWidth: "200px", margin: "0 auto" }}
            src={img10}
            alt='Profile 1'
          />
          <h3>10</h3>
        </div>
      </Slider>
    </div>
  );
};

export default index;
