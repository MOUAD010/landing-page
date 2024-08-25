import React from "react";
import back_ground_image from "../assets/car-is-driving-road-night-forest.jpg";
import car1 from "../assets/car-1.jfif";
import car2 from "../assets/car-2.jfif";
import car3 from "../assets/car-3.jfif";
import car4 from "../assets/car-4.jfif";
import car5 from "../assets/car-5.jfif";
import car6 from "../assets/car-6.jfif";
const Gallery = () => {
  return (
    <div id="Gallery" className=" bg-gray-700">
      {/* <div classNameName="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
        <div>
          <img src={car1} alt="" loading="lazy" />
        </div>
        <div classNameName="col-start-3">
          <img src={car2} alt="" loading="lazy" />
        </div>
        <div>
          <img src={car3} alt="" loading="lazy" />
        </div>
        <div>
          <img src={car4} alt="" loading="lazy" />
        </div>
        <div classNameName="row-start-1 col-start-2 col-span-2">
          <img src={car5} alt="" loading="lazy" />
        </div>
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  mx-4 py-6">
        <div>
          <img className="h-[500px] w-[500px] rounded-lg" src={car1} alt="" />
        </div>{" "}
        <div>
          <img className="h-[500px] w-[500px] rounded-lg" src={car2} alt="" />
        </div>{" "}
        <div>
          <img className="h-[500px] w-[500px] rounded-lg" src={car3} alt="" />
        </div>{" "}
        <div>
          <img className="h-[500px] w-[500px] rounded-lg" src={car4} alt="" />
        </div>{" "}
        <div>
          <img className="h-[500px] w-[500px] rounded-lg" src={car5} alt="" />
        </div>{" "}
        <div>
          <img className="h-[500px] w-[500px] rounded-lg" src={car6} alt="" />
        </div>{" "}
      </div>
    </div>
  );
};

export default Gallery;
