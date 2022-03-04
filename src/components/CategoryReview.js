import React from "react";
import {Link} from 'react-router-dom';
import Marquee from "react-fast-marquee";
import '../App.css';
import '../App.scss';
import { Icbed, Icatterction, Icluxurytrain } from "./Icon";

function Categoryreview() {
  
return (
  <section className=" py-10 md:py-14 bg-light-gray-200 border-y border-bordergray-200">
    <div className="container mx-auto px-4">
      <div className="flex items-center flex-wrap border-bordergray-200 border-b pb-7 mb-7 md:pb-14 md:mb-14">
        <div className="w-full px-2 md:w-1/3">
          <h4 className="text-primarycolor text-2xl md:text-3xl font-bold mb-3 md:mb-8">Explore Categories</h4>
          <p className="text-base text-secondarycolor w-full md:w-60">Read reviews. Write reviews. Find companies.</p>
          <button className="mt-4 md:mt-7 flex border border-orangecolor hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor font-semibold h-10 flex items-center px-5 rounded-full text-sm">View all category</button>
        </div>
        <div className="w-full px-0 md:px-2 md:w-2/3 md:flex items-end mt-5 md:mt-0">
          <div className="flex overflow-x-auto space-x-2 md:space-x-6 md:mx-0 -mx-4 px-4">
             <Link to="/Hotels">
              <div className="rounded-xl h-52 min-w-40 w-40 bg-white p-4 flex flex-col items-center justify-center">
                {/* <img className="mb-5" src="assets/img/ic_bed.svg" alt="icon"></img> */}
                <Icbed/>
                <h6 className="font-semibold text-base">Hotel</h6>
                <p className="text-sm font-normal">250 Reviews</p>
              </div>
              </Link>
              <Link to="/Attraction">
              <div className="rounded-xl h-52 min-w-40 w-40 bg-white p-4 flex flex-col items-center justify-center">
                <Icatterction/>
                <h6 className="font-semibold text-base">Attraction</h6>
                <p className="text-sm font-normal">250 Reviews</p>
              </div>
              </Link>
              <Link to="/Luxury-Train-Listing">
                <div className="rounded-xl h-52 min-w-40 w-40 bg-white p-4 flex flex-col items-center justify-center relative overflow-hidden">
                  <Icluxurytrain/>
                  <h6 className="font-semibold text-base">Luxury Train</h6>
                  <p className="text-sm font-normal">250 Reviews</p>
                  <p className="bg-gradient-to-r from-grad1 to-grad2 p-10 pt-10 pb-1 text-xxs text-white text-center font-semibold absolute -top-6 -right-12 rotate-45">COMING <br/> SOON</p>
                </div>
              </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="">
    <h4 className="text-primarycolor text-2xl md:text-3xl font-bold mb-3 md:mb-8 text-center">Recent Reviews</h4>
      <Marquee behavior="scroll" pauseOnHover="false">
          <div className="flex flex-nowrap ">
            <div className="flex flex-col">
              <div className="rounded-xl h-auto w-80 md:w-96 bg-white p-6 flex flex-col my-2 md:my-3 mx-2 md:mx-3">
                <div className="flex items-center">
                  <img className="mr-4" src="assets/img/ic_revimg1.svg"></img>
                  <ul className="flex justify-center">
                    <li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p><b>Nikhil Patel</b> reviewed <b>Revenuewall</b></p>
                  <p className="font-normal text-secondarycolor mt-2">“I really enjoyed the shopping experience with Lady Black Tie ...”</p>
                </div>
              </div>
              <div className="rounded-xl h-auto w-80 md:w-96 bg-white p-6 flex flex-col my-2 md:my-3 mx-2 md:mx-3">
                <div className="flex items-center">
                  <img className="mr-4" src="assets/img/ic_revimg1.svg"></img>
                  <ul className="flex justify-center">
                    <li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color-200 p-1 text-xxs"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color-200 p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color-200 p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color-200 p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-gray-color-300 p-1 text-xxs"></i>
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p><b>Nikhil Patel</b> reviewed <b>Revenuewall</b></p>
                  <p className="font-normal text-secondarycolor mt-2">“I really enjoyed the shopping experience with Lady Black Tie ...”</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-xl h-auto w-80 md:w-96 bg-white p-6 flex flex-col my-2 md:my-3 mx-2 md:mx-3">
                <div className="flex items-center">
                  <img className="mr-4" src="assets/img/ic_revimg1.svg"></img>
                  <ul className="flex justify-center">
                    <li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-yellow-color-500 p-1 text-xxs"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-yellow-color-500 p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-yellow-color-500 p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-gray-color-300 p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-gray-color-300 p-1 text-xxs"></i>
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p><b>Nikhil Patel</b> reviewed <b>Revenuewall</b></p>
                  <p className="font-normal text-secondarycolor mt-2">“I really enjoyed the shopping experience with Lady Black Tie ...”</p>
                </div>
              </div>
              <div className="rounded-xl h-auto w-80 md:w-96 bg-white p-6 flex flex-col my-2 md:my-3 mx-2 md:mx-3">
                <div className="flex items-center">
                  <img className="mr-4" src="assets/img/ic_revimg1.svg"></img>
                  <ul className="flex justify-center">
                    <li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p><b>Nikhil Patel</b> reviewed <b>Revenuewall</b></p>
                  <p className="font-normal text-secondarycolor mt-2">“I really enjoyed the shopping experience with Lady Black Tie ...”</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-xl h-auto w-80 md:w-96 bg-white p-6 flex flex-col my-2 md:my-3 mx-2 md:mx-3">
                <div className="flex items-center">
                  <img className="mr-4" src="assets/img/ic_revimg1.svg"></img>
                  <ul className="flex justify-center">
                    <li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p><b>Nikhil Patel</b> reviewed <b>Revenuewall</b></p>
                  <p className="font-normal text-secondarycolor mt-2">“I really enjoyed the shopping experience with Lady Black Tie ...”</p>
                </div>
              </div>
              <div className="rounded-xl h-auto w-80 md:w-96 bg-white p-6 flex flex-col my-2 md:my-3 mx-2 md:mx-3">
                <div className="flex items-center">
                  <img className="mr-4" src="assets/img/ic_revimg1.svg"></img>
                  <ul className="flex justify-center">
                    <li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color-200 p-1 text-xxs"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color-200 p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color-200 p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color-200 p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-gray-color-300 p-1 text-xxs"></i>
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p><b>Nikhil Patel</b> reviewed <b>Revenuewall</b></p>
                  <p className="font-normal text-secondarycolor mt-2">“I really enjoyed the shopping experience with Lady Black Tie ...”</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-xl h-auto w-80 md:w-96 bg-white p-6 flex flex-col my-2 md:my-3 mx-2 md:mx-3">
                <div className="flex items-center">
                  <img className="mr-4" src="assets/img/ic_revimg1.svg"></img>
                  <ul className="flex justify-center">
                    <li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-yellow-color-500 p-1 text-xxs"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-yellow-color-500 p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-yellow-color-500 p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-gray-color-300 p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-gray-color-300 p-1 text-xxs"></i>
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p><b>Nikhil Patel</b> reviewed <b>Revenuewall</b></p>
                  <p className="font-normal text-secondarycolor mt-2">“I really enjoyed the shopping experience with Lady Black Tie ...”</p>
                </div>
              </div>
              <div className="rounded-xl h-auto w-80 md:w-96 bg-white p-6 flex flex-col my-2 md:my-3 mx-2 md:mx-3">
                <div className="flex items-center">
                  <img className="mr-4" src="assets/img/ic_revimg1.svg"></img>
                  <ul className="flex justify-center">
                    <li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li><li>
                      <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p><b>Nikhil Patel</b> reviewed <b>Revenuewall</b></p>
                  <p className="font-normal text-secondarycolor mt-2">“I really enjoyed the shopping experience with Lady Black Tie ...”</p>
                </div>
              </div>
            </div>
          </div>
      </Marquee>
    </div>
  </section>
);
}
export default Categoryreview;