import React from "react";
import Slider from "react-slick";
import '../App.css';
import '../App.scss';
function MostBookedProperty() {
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
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
return (
<div>
  <section className="reviewSlider  pt-8 pb-2 md:pb-4 md:pt-12">
    <div className="container mx-auto px-4">
    <h4 className="text-primarycolor text-2xl md:text-3xl font-bold mb-2 md:mb-2 text-center">Most Booked Properties in Shimla</h4>
      <p className="font-normal text-base text-center text-secondarycolor">Discover India by exploring its top regions</p>
      <div className="mt-6 lg:mt-8 mx-0 md:-mx-2 lg:-mx-4">
      <Slider {...settings}>
        
          <div className="relative mx-0">
            <div className="mx-3">
              <img className="w-full h-44 object-cover rounded-2xl" src="assets/img/img_tripslide1.jpg" alt="Trip Slider Image"/>
              <p className="flex flex-col text-base font-bold mt-3 mb-1 text-primarycolor">Sawai Madhopur, India</p>
              <ul className="flex mb-1">
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
              <p className="font-normal text-secondarycolor font-outfit capitalize">1,423 reviews</p>
              </div>     
          </div>
          <div className="relative mx-0">
            <div className="mx-3">
              <img className="w-full h-44 object-cover rounded-2xl" src="assets/img/img_tripslide1.jpg" alt="Trip Slider Image"/>
              <p className="flex flex-col text-base font-bold mt-3 mb-1 text-primarycolor">Sawai Madhopur, India</p>
              <ul className="flex mb-1">
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
              <p className="font-normal text-secondarycolor font-outfit capitalize">1,423 reviews</p>
              </div>     
          </div>
          <div className="relative mx-0">
            <div className="mx-3">
              <img className="w-full h-44 object-cover rounded-2xl" src="assets/img/img_tripslide1.jpg" alt="Trip Slider Image"/>
              <p className="flex flex-col text-base font-bold mt-3 mb-1 text-primarycolor">Sawai Madhopur, India</p>
              <ul className="flex mb-1">
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
              <p className="font-normal text-secondarycolor font-outfit capitalize">1,423 reviews</p>
              </div>     
          </div>
          <div className="relative mx-0">
            <div className="mx-3">
              <img className="w-full h-44 object-cover rounded-2xl" src="assets/img/img_tripslide1.jpg" alt="Trip Slider Image"/>
              <p className="flex flex-col text-base font-bold mt-3 mb-1 text-primarycolor">Sawai Madhopur, India</p>
              <ul className="flex mb-1">
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
              <p className="font-normal text-secondarycolor font-outfit capitalize">1,423 reviews</p>
              </div>     
          </div>
          <div className="relative mx-0">
            <div className="mx-3">
              <img className="w-full h-44 object-cover rounded-2xl" src="assets/img/img_tripslide1.jpg" alt="Trip Slider Image"/>
              <p className="flex flex-col text-base font-bold mt-3 mb-1 text-primarycolor">Sawai Madhopur, India</p>
              <ul className="flex mb-1">
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
              <p className="font-normal text-secondarycolor font-outfit capitalize">1,423 reviews</p>
              </div>     
          </div>
          <div className="relative mx-0">
            <div className="mx-3">
              <img className="w-full h-44 object-cover rounded-2xl" src="assets/img/img_tripslide1.jpg" alt="Trip Slider Image"/>
              <p className="flex flex-col text-base font-bold mt-3 mb-1 text-primarycolor">Sawai Madhopur, India</p>
              <ul className="flex mb-1">
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
              <p className="font-normal text-secondarycolor font-outfit capitalize">1,423 reviews</p>
              </div>     
          </div>
          <div className="relative mx-0">
            <div className="mx-3">
              <img className="w-full h-44 object-cover rounded-2xl" src="assets/img/img_tripslide1.jpg" alt="Trip Slider Image"/>
              <p className="flex flex-col text-base font-bold mt-3 mb-1 text-primarycolor">Sawai Madhopur, India</p>
              <ul className="flex mb-1">
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
              <p className="font-normal text-secondarycolor font-outfit capitalize">1,423 reviews</p>
              </div>     
          </div>
        </Slider>
      </div>
    </div>
  </section>
</div>
);
}
export default MostBookedProperty;