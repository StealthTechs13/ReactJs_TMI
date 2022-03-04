import React from "react";
import '../App.css';
import '../App.scss';
import { Icrighticon } from "./Icon";

function Learnexperience() {
return (
  <section className="py-10 md:py-10 mt-5 bg-light-gray-200 ">
    <div className="max-w-4xl  md:mx-auto ">
      <div className="container mx-auto px-4">
        <div className="flex items-center flex-wrap ">
        <div className="w-full px-2 md:w-1/2 mb-8 md:mb-0 ">
            <img src="assets/img/img_explearn.svg" alt="img" />
          </div>
          <div className="w-full px-2 md:w-1/2">
            <h4 className="text-primarycolor text-2xl md:text-3xl font-bold mb-2 md:mb-2 ">Help others to learn from your experiences</h4>
            <p className="font-normal text-base text-secondarycolor pr-0 md:pr-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
            <button className="transition duration-500 buttonUnfill mt-4 md:mt-5 flex border border-orangecolor hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor  font-semibold h-10 flex items-center px-5 rounded-full text-sm">
              {/* <img className="mr-3" src="assets/img/ic_writeicon.svg" alt="Logo"/> */}
              <Icrighticon/> Write a Review</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
export default Learnexperience;