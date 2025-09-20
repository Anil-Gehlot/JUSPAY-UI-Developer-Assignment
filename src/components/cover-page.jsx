import React from "react";
import vectorImage from "./images/vector.png";
import ellipse2Image from "./images/ellipse2.png";
import ellipse1Image from "./images/ellipse1.png";
import { Link } from "react-router-dom";

function CoverPage() {
  return (
    <div className="relative w-[100%] h-[100vh] bg-[#171717] overflow-hidden">
      <div className="cover font-mono text-white">
        <img
          src={vectorImage}
          className="absolute top-0 left-[29%] w-[40%] h-[59%] -translate-x-1/2 z-1 pointer-events-none object-contain"
          alt="VectorImage"
        />
        <img
          src={ellipse2Image}
          className="absolute top-0 left-1/2 -translate-x-1/2 z-1 pointer-events-none"
          alt="Green"
        />
        <img
          src={ellipse1Image}
          className="absolute bottom-0 left-[78%] -translate-x-1/2 z-1 overflow-hidden object-contain pointer-events-none w-[40%]"
          alt="rose"
        />
        <div className="md:pl-[10%] px-4 pt-[100px] md:pt-[141px] flex flex-col justify-center">
          <Link
            to="/Dashboard"
            className="bg-[#ffbb37] hover:underline text-black text-2xl font-light uppercase rounded-[15px] border-2 border-black mb-5 shadow-[10px_10px_0_#555] transition-all duration-500 ease-in-out p-[20px] w-[200px] md:w-[349px] cursor-pointer z-[999] text-center inline-block"
          >
            Assignment
          </Link>
          <div className="heading mt-[50px] lg:mt-[49px]">
            <h1 className="font-sans font-bold text-[50px] sm:text-[100px] lg:text-[150px] leading-[50px] sm:leading-[100px] lg:leading-[200px] uppercase">
              UI Developer <br /> Assignment
            </h1>
          </div>
          <h2 className="text-4xl font-light tracking-[2px] opacity-70 mt-[50px] md:mt-0">
            COMPANY
          </h2>
          <p className="text-2xl md:text-4xl mt-[17px]">
            Juspay Technologies Private Limited
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoverPage;
