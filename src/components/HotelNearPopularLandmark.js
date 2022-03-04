import React from "react";
import Slider from "react-slick";
import '../App.css';
import '../App.scss';
function HotelNearPopularLandmark() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
return (
<div>
  <section className="placetoStay pb-8 md:pb-12">
    <div className="container mx-auto px-4">
    <h4 className="text-primarycolor text-2xl md:text-3xl font-bold mb-2 md:mb-2 text-center">Hotels in India near popular landmarks</h4>
      <p className="font-normal text-base text-center text-secondarycolor">Discover India by exploring its top regions</p>
      <div className="mt-6 lg:mt-8 mx-0 md:-mx-2 lg:-mx-4">
      <Slider {...settings}>
        
          <div className="relative mx-0">
            <div className="relative mx-3 rounded-2xl overflow-hidden">
              <img className="w-full h-64 object-cover " src="assets/img/bestplace1.png" alt="Trip Slider Image"/>
              <div className="absolute bottom-0 left-0 w-full gradientCustom px-4 py-4">
                <p className="flex flex-col text-base font-semibold mb-1 text-white">Sawai Madhopur, India</p>
                <p className="font-normal text-white text-sm font-outfit capitalize">1,423 reviews</p>
              </div>
            </div>     
          </div>
          <div className="relative mx-0">
            <div className="relative mx-3 rounded-2xl overflow-hidden">
              <img className="w-full h-64 object-cover " src="assets/img/bestplace2.png" alt="Trip Slider Image"/>
              <div className="absolute bottom-0 left-0 w-full gradientCustom px-4 py-4">
                <p className="flex flex-col text-base font-semibold mb-1 text-white">Sawai Madhopur, India</p>
                <p className="font-normal text-white text-sm font-outfit capitalize">1,423 reviews</p>
              </div>
            </div>     
          </div>
          <div className="relative mx-0">
            <div className="relative mx-3 rounded-2xl overflow-hidden">
              <img className="w-full h-64 object-cover " src="assets/img/bestplace3.png" alt="Trip Slider Image"/>
              <div className="absolute bottom-0 left-0 w-full gradientCustom px-4 py-4">
                <p className="flex flex-col text-base font-semibold mb-1 text-white">Sawai Madhopur, India</p>
                <p className="font-normal text-white text-sm font-outfit capitalize">1,423 reviews</p>
              </div>
            </div>     
          </div>
          <div className="relative mx-0">
            <div className="relative mx-3 rounded-2xl overflow-hidden">
              <img className="w-full h-64 object-cover " src="assets/img/bestplace4.png" alt="Trip Slider Image"/>
              <div className="absolute bottom-0 left-0 w-full gradientCustom px-4 py-4">
                <p className="flex flex-col text-base font-semibold mb-1 text-white">Sawai Madhopur, India</p>
                <p className="font-normal text-white text-sm font-outfit capitalize">1,423 reviews</p>
              </div>
            </div>     
          </div>
          <div className="relative mx-0">
            <div className="relative mx-3 rounded-2xl overflow-hidden">
              <img className="w-full h-64 object-cover " src="assets/img/bestplace1.png" alt="Trip Slider Image"/>
              <div className="absolute bottom-0 left-0 w-full gradientCustom px-4 py-4">
                <p className="flex flex-col text-base font-semibold mb-1 text-white">Sawai Madhopur, India</p>
                <p className="font-normal text-white text-sm font-outfit capitalize">1,423 reviews</p>
              </div>
            </div>     
          </div>
          <div className="relative mx-0">
            <div className="relative mx-3 rounded-2xl overflow-hidden">
              <img className="w-full h-64 object-cover " src="assets/img/bestplace2.png" alt="Trip Slider Image"/>
              <div className="absolute bottom-0 left-0 w-full gradientCustom px-4 py-4">
                <p className="flex flex-col text-base font-semibold mb-1 text-white">Sawai Madhopur, India</p>
                <p className="font-normal text-white text-sm font-outfit capitalize">1,423 reviews</p>
              </div>
            </div>     
          </div>
        </Slider>
      </div>
    </div>
  </section>
</div>
);
}
export default HotelNearPopularLandmark;