import React from "react";
import Slider from "react-slick";
import '../App.css';
import '../App.scss';
function Tripslider() {
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
<div className='banner'>
  <section className=" py-8 md:py-9">
    <div className="container mx-auto px-4">
      <h4 className="text-primarycolor text-2xl md:text-3xl font-bold mb-2 md:mb-2 text-center">Dream Your Next Trip</h4>
      <p className="font-normal text-base text-center">Explore what’s nearby</p>
      <div className="mt-8">
      <Slider {...settings}>
        
          <div className="relative mx-0">
            <div className="mx-3">
              <img className="w-full" src="assets/img/img_tripslide1.jpg" alt="Trip Slider Image"/>
              <p className="flex flex-col text-base font-bold mt-4 text-primarycolor">Sawai Madhopur, <span>India</span></p>
              <ul className="flex justify-center absolute top-3 right-5">
                <li>
                    <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
              </ul> 
              </div>     
          </div>
          <div className="relative mx-0">
            <div className="mx-3">
              <img className="w-full" src="assets/img/img_tripslide1.jpg" alt="Trip Slider Image"/>
              <p className="flex flex-col text-base font-bold mt-4 text-primarycolor">Sawai Madhopur, <span>India</span></p>
              <ul className="flex justify-center absolute top-3 right-5">
                <li>
                    <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
              </ul> 
              </div>     
          </div>
          <div className="relative mx-0">
            <div className="mx-3">
              <img className="w-full" src="assets/img/img_tripslide1.jpg" alt="Trip Slider Image"/>
              <p className="flex flex-col text-base font-bold mt-4 text-primarycolor">Sawai Madhopur, <span>India</span></p>
              <ul className="flex justify-center absolute top-3 right-5">
                <li>
                    <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
              </ul> 
              </div>     
          </div>
          <div className="relative mx-0">
            <div className="mx-3">
              <img className="w-full" src="assets/img/img_tripslide1.jpg" alt="Trip Slider Image"/>
              <p className="flex flex-col text-base font-bold mt-4 text-primarycolor">Sawai Madhopur, <span>India</span></p>
              <ul className="flex justify-center absolute top-3 right-5">
                <li>
                    <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
              </ul> 
              </div>     
          </div>
          <div className="relative mx-0">
            <div className="mx-3">
              <img className="w-full" src="assets/img/img_tripslide1.jpg" alt="Trip Slider Image"/>
              <p className="flex flex-col text-base font-bold mt-4 text-primarycolor">Sawai Madhopur, <span>India</span></p>
              <ul className="flex justify-center absolute top-3 right-5">
                <li>
                    <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
              </ul> 
              </div>     
          </div>
          <div className="relative mx-0">
            <div className="mx-3">
              <img className="w-full" src="assets/img/img_tripslide1.jpg" alt="Trip Slider Image"/>
              <p className="flex flex-col text-base font-bold mt-4 text-primarycolor">Sawai Madhopur, <span>India</span></p>
              <ul className="flex justify-center absolute top-3 right-5">
                <li>
                    <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
              </ul> 
              </div>     
          </div>
          <div className="relative mx-0">
            <div className="mx-3">
              <img className="w-full" src="assets/img/img_tripslide1.jpg" alt="Trip Slider Image"/>
              <p className="flex flex-col text-base font-bold mt-4 text-primarycolor">Sawai Madhopur, <span>India</span></p>
              <ul className="flex justify-center absolute top-3 right-5">
                <li>
                    <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
              </ul> 
              </div>     
          </div>
          <div className="relative mx-0">
            <div className="mx-3">
              <img className="w-full" src="assets/img/img_tripslide1.jpg" alt="Trip Slider Image"/>
              <p className="flex flex-col text-base font-bold mt-4 text-primarycolor">Sawai Madhopur, <span>India</span></p>
              <ul className="flex justify-center absolute top-3 right-5">
                <li>
                    <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i>
                </li>
              </ul> 
              </div>     
          </div>
        </Slider>
      </div>
    </div>
  </section>
</div>
);
}
export default Tripslider;