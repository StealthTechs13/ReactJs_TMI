import React from "react";
import '../App.css';
import '../App.scss';
import {Link} from 'react-router-dom';
import { IcnearAttraction } from "./Icon";

function NearbyAttraction() {
return (
    <section className="rounded-2xl flex flex-col bg-white border border-borderlight-10 mt-4 md:mt-5">
          <div className=" pt-4 lg:pt-6 pb-4 px-6 lg:px-8 border-b border-bordergray-200 flex justify-between items-center">
            <h4 className="font-bold text-primarylight-333 text-xl">Nearby attractions </h4> <IcnearAttraction/>
          </div>
          <div className="pt-8 lg:pt-10 pb-8 lg:pb-12 px-6 lg:px-8">
            <div className="flex items-center mb-6 lg:mb-8 pb-6 lg:pb-8 border-b border-borderlight-10" >
                <h3 className="text-5xl font-bold mr-4 text-orangecolor">50</h3>
                <div className="flex flex-col">
                  <p className="text-base font-semibold text-primarylight-333">Attractions</p>
                  <p className="font-normal text-primarylight-333 text-base ">within 10 km</p>

                </div>
            </div>
            <div className="mb-6">
              <div className="flex flex-col mb-3">
                <p className="text-base font-semibold text-primarylight-333">Mohan Shakti Heritage Park</p>
                <div className="flex items-center">
                  <ul className="flex mr-2">
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                  </ul>
                  <p className="text-xs font-normal text-primarylight-333">156 reviews</p>
                </div>
                <p className="text-xs font-normal mt-1 text-primarylight-333">4 min .  Parks</p>
              </div>
              <div className="flex flex-col mb-3">
                <p className="text-base font-semibold text-primarylight-333">Mohan Shakti Heritage Park</p>
                <div className="flex items-center">
                  <ul className="flex mr-2">
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                  </ul>
                  <p className="text-xs font-normal text-primarylight-333">156 reviews</p>
                </div>
                <p className="text-xs font-normal mt-1 text-primarylight-333">4 min .  Parks</p>
              </div>
              <div className="flex flex-col mb-3">
                <p className="text-base font-semibold text-primarylight-333">Mohan Shakti Heritage Park</p>
                <div className="flex items-center">
                  <ul className="flex mr-2">
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                  </ul>
                  <p className="text-xs font-normal text-primarylight-333">156 reviews</p>
                </div>
                <p className="text-xs font-normal mt-1 text-primarylight-333">4 min .  Parks</p>
              </div>
              <div className="flex flex-col mb-3">
                <p className="text-base font-semibold text-primarylight-333">Mohan Shakti Heritage Park</p>
                <div className="flex items-center">
                  <ul className="flex mr-2">
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                  </ul>
                  <p className="text-xs font-normal text-primarylight-333">156 reviews</p>
                </div>
                <p className="text-xs font-normal mt-1 text-primarylight-333">4 min .  Parks</p>
              </div>
            </div>
            <Link to="#" className="text-orangecolor text-sm font-semibold">See all nearby attractions</Link>
          </div>
    </section>
);
}
export default NearbyAttraction;