import React from "react";
import '../App.css';
import '../App.scss';
import {Link} from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { IcnearAttraction, IcForecastOpen, IcForecastweather } from "./Icon";

function ForeCastLocation() {
return (
    <section className="rounded-2xl flex flex-col bg-white border border-borderlight-10 mt-4 md:mt-5">
          <div className=" pt-4 lg:pt-6 pb-4 px-6 lg:px-8 border-b border-bordergray-200 flex justify-between items-center">
            <h4 className="font-bold text-primarylight-333 text-xl">Nearby attractions </h4> <IcnearAttraction/>
          </div>
          <div className="pt-8 lg:pt-10 pb-8 lg:pb-12 px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6 lg:mb-8 pb-6 lg:pb-8 border-b border-borderlight-10" >
                <div className="flex flex-col">
                  <h3 className="text-5xl font-bold mr-4 text-primarylight-333">33<span className="text-4xl text-secondarycolor relative -top-2 ">°c</span></h3>
                  <p className="w-24 text-light-gray-t mt-2">Agra, Uttar Pradesh</p>
                </div>
                <IcForecastOpen/>
            </div>
            <div className="mb-2">
              <p className="w-24 text-light-gray-t ">Forecast</p>
              <div className="forecastSlider mt-4">
                    <AwesomeSlider>
                      <div className="forecastcol flex justify-between items-center w-full">
                        <div className="flex flex-col text-center">
                          <p className="txt-xs text-secondarycolor">MON</p>
                          <p className="txt-xs text-light-gray-t">2pm</p>
                          <IcForecastweather/>
                          <p className="txt-xs text-light-gray-t">2°</p>
                        </div>
                        <div className="flex flex-col text-center">
                          <p className="txt-xs text-secondarycolor">MON</p>
                          <p className="txt-xs text-light-gray-t">2pm</p>
                          <IcForecastweather/>
                          <p className="txt-xs text-light-gray-t">2°</p>
                        </div>
                        <div className="flex flex-col text-center">
                          <p className="txt-xs text-secondarycolor">MON</p>
                          <p className="txt-xs text-light-gray-t">2pm</p>
                          <IcForecastweather/>
                          <p className="txt-xs text-light-gray-t">2°</p>
                        </div>
                        <div className="flex flex-col text-center">
                          <p className="txt-xs text-secondarycolor">MON</p>
                          <p className="txt-xs text-light-gray-t">2pm</p>
                          <IcForecastweather/>
                          <p className="txt-xs text-light-gray-t">2°</p>
                        </div>
                      </div>
                      <div className="forecastcol flex justify-between items-center w-full">
                        <div className="flex flex-col text-center">
                          <p className="txt-xs text-secondarycolor">MON</p>
                          <p className="txt-xs text-light-gray-t">2pm</p>
                          <IcForecastweather/>
                          <p className="txt-xs text-light-gray-t">2°</p>
                        </div>
                        <div className="flex flex-col text-center">
                          <p className="txt-xs text-secondarycolor">MON</p>
                          <p className="txt-xs text-light-gray-t">2pm</p>
                          <IcForecastweather/>
                          <p className="txt-xs text-light-gray-t">2°</p>
                        </div>
                        <div className="flex flex-col text-center">
                          <p className="txt-xs text-secondarycolor">MON</p>
                          <p className="txt-xs text-light-gray-t">2pm</p>
                          <IcForecastweather/>
                          <p className="txt-xs text-light-gray-t">2°</p>
                        </div>
                        <div className="flex flex-col text-center">
                          <p className="txt-xs text-secondarycolor">MON</p>
                          <p className="txt-xs text-light-gray-t">2pm</p>
                          <IcForecastweather/>
                          <p className="txt-xs text-light-gray-t">2°</p>
                        </div>
                      </div>
                      <div className="forecastcol flex justify-between items-center w-full">
                        <div className="flex flex-col text-center">
                          <p className="txt-xs text-secondarycolor">MON</p>
                          <p className="txt-xs text-light-gray-t">2pm</p>
                          <IcForecastweather/>
                          <p className="txt-xs text-light-gray-t">2°</p>
                        </div>
                        <div className="flex flex-col text-center">
                          <p className="txt-xs text-secondarycolor">MON</p>
                          <p className="txt-xs text-light-gray-t">2pm</p>
                          <IcForecastweather/>
                          <p className="txt-xs text-light-gray-t">2°</p>
                        </div>
                        <div className="flex flex-col text-center">
                          <p className="txt-xs text-secondarycolor">MON</p>
                          <p className="txt-xs text-light-gray-t">2pm</p>
                          <IcForecastweather/>
                          <p className="txt-xs text-light-gray-t">2°</p>
                        </div>
                        <div className="flex flex-col text-center">
                          <p className="txt-xs text-secondarycolor">MON</p>
                          <p className="txt-xs text-light-gray-t">2pm</p>
                          <IcForecastweather/>
                          <p className="txt-xs text-light-gray-t">2°</p>
                        </div>
                      </div>
                    </AwesomeSlider>
              </div>
            </div>
          </div>
    </section>
);
}
export default ForeCastLocation;