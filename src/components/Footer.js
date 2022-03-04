import React from "react";
import '../App.css';
import '../App.scss';
import { Logo } from "./Icon";

function Footer() {
return (
  // <section className="py-10 md:py-10  bg-graydark-900 ">
  <section className="bg-graydark-900 overflow-hidden pb-16 lg:pb-0">
      <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row ">
      <div className="md:px-4 w-full  md:w-1/3 bg-graydark-700 py-8 relative footerAfter">
        <div className="relative z-50">
          {/* <img src="assets/img/logo.svg" alt="logo"/> */}
          <Logo/>
          <h5 className="text-white text-base mt-3 mb-3">TourMyIndia</h5>
          <p className="text-base text-white mb-4 font-outfit">India'a fastest growing Hotel Booking Platform</p>
          <div className="flex sm:justify-start border-b border-light-gray-100 mb-4 pb-4">
            <a href="" className="w-8 h-8  text-center py-1  text-white ">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="w-8 h-8  text-center py-1 ml-2 text-white ">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="" className="w-8 h-8  text-center py-1 ml-2 text-white ">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="w-8 h-8  text-center py-1 ml-2 text-white ">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <p className="text-sm text-white mb-3">Call</p>
          <div className="mb-6">
            <h5 className="text-white text-base font-bold  mb-1 font-outfit">+91-120-4052615 - 99 </h5>
            <p className="text-sm text-white  font-outfit">(85 hunting lines are available)</p>
          </div>
          <div className="mb-6">
            <h5 className="text-white text-base font-bold  mb-1 font-outfit">Whatsapp</h5>
            <p className="text-base text-white  font-outfit">+91-9212553106</p>
          </div>
          <div className="">
            <h5 className="text-white text-base font-bold  mb-1 font-outfit">Email</h5>
            <p className="text-base text-white  font-outfit">info@tourmyindia.com</p>
          </div>
        </div>
      </div>
      <div className="w-full  pb-4 md:pb-4">
        <div className="w-full flex flex-col md:flex-row mt-5 md:mt-0 md:pl-10 xl:pl-16 pt-6 md:pt-20">
            <div className="px-0 md:px-4 mb-5 md:mb-0  md:w-1/2">
              <h5 className="text-sm font-semibold mb-3 text-white">Company </h5>
              <ul className="list-none footer-links">
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">About</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">We Are Hiring</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">TMI Reviews</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">Terms & Condit</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">Privacy Policies</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">Copyright Policies</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">Supports</a>
                </li>
              </ul>
            </div>
            <div className="px-0 md:px-4 mb-5 md:mb-0  md:w-1/2">
              <h5 className="text-sm font-semibold mb-3 text-white">Category</h5>
              <ul className="list-none footer-links">
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">Home</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">Apartments</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">Resorts</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">Hostels</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">B&Bs</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">Guest Houses</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">vIllas</a>
                </li>
              </ul>
            </div>
            <div className="px-0 md:px-4 mb-5 md:mb-0  md:w-1/2">
              <h5 className="text-sm font-semibold mb-3 text-white">Intersted Area</h5>
              <ul className="list-none footer-links">
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">Wildlife</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">Heritage</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">Pilgrimage</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">Hill Station</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">Adventure</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="text-white text-sm font-outfit font-light">Beach</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-wrap  border-y border-light-gray-100 py-4 md:py-6 mt-2 md:mt-10 md:mt-16 md:ml-10 xl:ml-16">
              <div className="md:w-1/4 w-6/12 mb-6 md:mb-0 justify-center md:justify-start flex items-center">
                <img src="assets/img/ic_part1.svg" />
              </div>
              <div className="md:w-1/4 w-6/12 mb-6 md:mb-0 justify-center md:justify-start flex items-center">
                <img src="assets/img/ic_part2.svg" />
              </div>
              <div className="md:w-1/4 w-6/12 mb-0 md:mb-0 justify-center md:justify-start flex items-center">
                <img src="assets/img/ic_part3.svg" />
              </div>
              <div className="md:w-1/4 w-6/12 mb-0 md:mb-0 justify-center md:justify-start flex items-center">
                <img src="assets/img/ic_part4.svg" />
              </div>
            </div>
            <p className="text-sm font-light text-white text-center md:text-left  font-outfit  mt-3 md:mt-6 md:ml-10 xl:ml-16">CopyRight©2020, Tour My India Pvt. Ltd</p>
          </div>
      </div>
    </div>
  </div>
  </section>
);
}
export default Footer;