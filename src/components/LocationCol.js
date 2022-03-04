import React from "react";
import '../App.css';
import '../App.scss';
import {IcnearBy, IcPtransport, IcClosetAirport, IcBeachesNear } from "./Icon";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
function LocationCol() {
  const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -33.766294, lng: 150.719901 }}>
        {props.isMarkerShown && (
          <Marker position={{ lat: -33.766294, lng: 150.719901 }} />
        )}
      </GoogleMap>
    ))
  );
return (
    <section className="rounded-2xl bg-white border border-borderlight-10 mt-4 md:mt-5">
          <h4 className="font-bold text-primarycolor text-xl pt-4 lg:pt-6 pb-4 px-6 lg:px-8 border-b border-bordergray-200">Location</h4>
          <div className="pt-0 pb-8 lg:pb-12 px-4 lg:px-8">
            <div className="mb-4 lg:mb-8 -mx-6 lg:-mx-8">
              <MyMapComponent
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAN7mwyR_B3NDDLnuwkLds1RU9IUSBklc8&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div className="h-full" />}
                  containerElement={<div className="h-44 lg:h-64" />}
                  mapElement={<div className="h-full" />}
                />
            </div>
            <div className="grid grid-col-12 md:grid-cols-2 gap-0 md:gap-12">
                <div className="col-span-12 md:col-span-1">
                  <div className="flex mb-3 pb-6 border-b border-borderlight-10">
                    <IcnearBy/> <p className="ml-4 font-bold text-primarycolor text-sm"> What's nearby</p>
                  </div>
                  <div className="pl-2 pr-3 flex justify-between border-b border-borderlight-10 mb-3 pb-3">
                    <p className="font-normal text-primarycolor text-sm">Cabo De Rama Fort</p>
                    <p className="font-normal text-primarycolor text-sm">8.2 km</p>
                  </div>
                  <div className="pl-2 pr-3 flex justify-between border-b border-borderlight-10 mb-3 pb-3">
                    <p className="font-normal text-primarycolor text-sm">Cola Beach</p>
                    <p className="font-normal text-primarycolor text-sm">11.1 km</p>
                  </div>
                  <div className="pl-2 pr-3 flex justify-between border-b border-borderlight-10 mb-3 pb-3">
                    <p className="font-normal text-primarycolor text-sm">Agonda beach</p>
                    <p className="font-normal text-primarycolor text-sm">13.1 km</p>
                  </div>
                  <div className="pl-2 pr-3 flex justify-between border-b border-borderlight-10 mb-3 pb-3">
                    <p className="font-normal text-primarycolor text-sm">Martins Corner</p>
                    <p className="font-normal text-primarycolor text-sm">16.8 km</p>
                  </div>
                  <div className="pl-2 pr-3 flex justify-between border-b border-borderlight-10 mb-3 pb-3">
                    <p className="font-normal text-primarycolor text-sm">Mother of God</p>
                    <p className="font-normal text-primarycolor text-sm">8.2 km</p>
                  </div>
                  <div className="pl-2 pr-3 flex justify-between border-b border-borderlight-10 mb-3 pb-3">
                    <p className="font-normal text-primarycolor text-sm">Church</p>
                    <p className="font-normal text-primarycolor text-sm">11.1 km</p>
                  </div>
                  <div className="pl-2 pr-3 flex justify-between border-b border-borderlight-10 mb-3 pb-3">
                    <p className="font-normal text-primarycolor text-sm">Butterfly Beach</p>
                    <p className="font-normal text-primarycolor text-sm">13.1 km</p>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-1 mt-4 md:mt-0">
                  <div className="mb-6">
                    <div className="flex mb-3 pb-6 border-b border-borderlight-10">
                      <IcPtransport/> <p className="ml-4 font-bold text-primarycolor text-sm"> Public transport</p>
                    </div>
                    <div className="pl-2 pr-3 flex justify-between mb-3 pb-3">
                      <p className="font-normal text-primarycolor text-sm">Train  Margao Railway Station</p>
                      <p className="font-normal text-primarycolor text-sm">8.2 km</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex mb-3 pb-6 border-b border-borderlight-10">
                      <IcClosetAirport/> <p className="ml-4 font-bold text-primarycolor text-sm">  Closest airports</p>
                    </div>
                    <div className="pl-2 pr-3 flex justify-between mb-3 pb-3">
                      <p className="font-normal text-primarycolor text-sm">Train  Margao Railway Station</p>
                      <p className="font-normal text-primarycolor text-sm">8.2 km</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex mb-3 pb-6 border-b border-borderlight-10">
                      <IcBeachesNear/> <p className="ml-4 font-bold text-primarycolor text-sm">  Beaches in the neighbourhood</p>
                    </div>
                    <div className="pl-2 pr-3 flex justify-between pb-3">
                      <p className="font-normal text-primarycolor text-sm">Train  Margao Railway Station</p>
                      <p className="font-normal text-primarycolor text-sm">8.2 km</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
    </section>
);
}
export default LocationCol;