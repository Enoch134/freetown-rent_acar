import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import car1 from "../../assets/all-images/car1.jpg";
import car2 from "../../assets/all-images/car2.jpg";
import car3 from "../../assets/all-images/car3.jpg";
import car4 from "../../assets/all-images/car4.jpg";
import car5 from "../../assets/all-images/car5.jpg";

const FiveSeater = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
    swipeToSlide: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        {/* <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
        </p> */}

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={car1} alt="" className="w-50 h-50 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Musa Nfa</h6>
            <p className="section__description">Customer</p>
            <p className="section__description">Customer wredggjhk,k.,hggvwdefrgthy</p>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        {/* <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
        </p> */}

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={car2} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Johnny</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        {/* <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
        </p> */}

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={car3} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Kingston</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        {/* <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
        </p> */}

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={car4} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Musa Enoch</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        {/* <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          explicabo molestias recusandae repudiandae, dolor, sapiente placeat
          ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
          voluptate odit?
        </p> */}

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={car5} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Web Dev</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default FiveSeater;
