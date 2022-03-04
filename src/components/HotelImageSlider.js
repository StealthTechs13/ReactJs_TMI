import "glider-js/glider.min.css";
import React from "react";
import PhotosCarousel from "./PhotoCarousel";
import ImageLightBox from './ImageLightBox';
import { IcHomePre, IctravlerP, IcClose,  } from "./Icon";
import { Link } from 'react-router-dom';

const photosToShow = [
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png",
    "assets/img/hotel1.png"
  

];

const thumbnailsCarouselConfig = {
  itemWidth: 150,
  slidesToShow: "auto",
  slidesToScroll: "auto"
};

 function HotelImageSlider() {
    const [showModal, setShowModal] = React.useState(false);

  // const thumbnailsGliderRef = React.useRef(null);
  const [currentPhotoIdx, setCurrentPhotoIdx] = React.useState(0);
  const onClickPhotoHandler = React.useCallback(
    (idx) => () => setCurrentPhotoIdx(idx),
    []
  );
  const onSlideChangeHandler = React.useCallback(
    (photoIdx) => {
      setCurrentPhotoIdx(photoIdx);
    },
    [setCurrentPhotoIdx]
  );
  const photos = React.useMemo(
    () =>
      photosToShow.map((photoUrl, idx) => {
        const key = `${photoUrl}_${idx}`;
        let className = "slide__content";
        if (currentPhotoIdx === idx) {
          className += " --current-selected";
        }
        return (
          <div
            key={key}
            className={className}
            onClick={onClickPhotoHandler(idx)}
          >
            <img alt="" src={photoUrl} />
          </div>
        );
      }),
    [onClickPhotoHandler, currentPhotoIdx]
  );

  return (
    <div className="App container mx-auto px-0 lg:px-4 relative">
      <div className="photos-gallery">
            <div className="flex">
                <div className="relative w-full lg:w-2/3">
                    <PhotosCarousel
                    className="photo-wrapper"
                    onSlideChange={onSlideChangeHandler}
                    currentSlideIdx={currentPhotoIdx}
                    >
                    {photos}
                    </PhotosCarousel>
                    <div className="absolute bottom-6 left-6"><ImageLightBox/></div>
                </div>
                <div className="w-50 w-1/3 hidden lg:flex flex-col">
                    <Link onClick={() => setShowModal(true)}>
                        <div className="rounded-r-2xl relative overflow-hidden pl-2 pb-2 w-full h-full">
                            <img className="w-full h-full" src="assets/img/roomscat.png" alt="img" />
                            <div className="absolute top-0 flex items-center flex-col justify-center h-full w-full">
                                <IcHomePre/>
                                <h6 className="text-white font-semibold text-lg font-outfit leading-none mt-4">Rooms</h6>
                                <p className="text-white font-light text-base font-outfit leading-none mt-2">(250)</p>
                            </div>
                        </div>
                    </Link>
                    <Link onClick={() => setShowModal(true)}>
                        <div className="rounded-r-2xl relative overflow-hidden pl-2 w-full h-full">
                            <img className="w-full h-full" src="assets/img/roomscat.png" alt="img" />
                            <div className="absolute top-0 flex items-center flex-col justify-center h-full w-full">
                                <IctravlerP/>
                                <h6 className="text-white font-semibold text-lg font-outfit leading-none mt-4">Traveler</h6>
                                <p className="text-white font-light text-base font-outfit leading-none mt-2">(250)</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        <PhotosCarousel
          className="thumbnails-wrapper hidden lg:block"
          config={thumbnailsCarouselConfig}
          currentSlideIdx={currentPhotoIdx}
        >
          {photos}
        </PhotosCarousel>
      </div>
{/* hotel detail moadal */}
    {showModal ? (
        <>
        <div
        className="justify-center items-start md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[110] outline-none focus:outline-none top-0"
        >
        <div className="relative w-full my-6 mx-auto max-w-5xl h-screen scroll mt-0 md:mt-10 flex 2xl:items-center items-start">
            <div className="border-0  sm:rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-screen overflow-auto xl:h-auto">
                <div className="flex justify-between border-b border-bordergray-200">
                <div className="modalbreadcrumb p-4">
                        <h4 className="text-primarycolor md:text-lg font-bold my-3 text-left">The Oberoi Cecil, Shimla</h4>
                        <div className="flex items-center">
                            <ul className="flex mb-1"><li className="leading-none"><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li><li className="leading-none"><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li><li className="leading-none"><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li><li className="leading-none"><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li><li className="leading-none"><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li></ul><p className="font-normal text-xs text-secondarycolor font-outfit ml-2">1,423 reviews</p>
                            <p className="font-normal text-black text-sm ml-4">Advanced Study Road, Shimla 171004 India</p>
                            </div>
                    </div>
                    <div className="">
                        <button
                        className="p-5 ml-auto bg-transparent border-0 text-primarcolor float-right  leading-none  outline-none focus:outline-none"
                        onClick={() =>
                        setShowModal(false)}
                        >
                        <IcClose/>
                        </button>
                    </div>
                </div>
                <div className="relative flex">
                <div className="w-1/4 p-4 border-r border-bordergray-200">
                    <p className="text-black text-sm text-left font-semibold mb-2">Categories</p>
                    <div className="flex flex-wrap">
                    <div className="w-1/2 p-1">
                            <div className="rounded-lg w-full h-24 overflow-hidden relative">
                                <img src="assets/img/categories1.png" alt="categories img"/>
                                <p className="absolute bottom-2 left-2 font-semibold text-sm text-white">All 100</p>
                            </div>
                        </div>
                        <div className="w-1/2 p-1">
                            <div className="rounded-lg w-full h-24 overflow-hidden relative">
                                <img src="assets/img/categories2.png" alt="categories img"/>
                                <p className="absolute bottom-2 left-2 font-semibold text-sm text-white">All 100</p>
                            </div>
                        </div>
                        <div className="w-1/2 p-1">
                            <div className="rounded-lg w-full h-24 overflow-hidden relative">
                                <img src="assets/img/categories3.png" alt="categories img"/>
                                <p className="absolute bottom-2 left-2 font-semibold text-sm text-white">All 100</p>
                            </div>
                        </div>
                        <div className="w-1/2 p-1">
                            <div className="rounded-lg w-full h-24 overflow-hidden relative">
                                <img src="assets/img/categories4.png" alt="categories img"/>
                                <p className="absolute bottom-2 left-2 font-semibold text-sm text-white">All 100</p>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="w-3/4 px-4 pt-6 mb-8">
                    <div className="photos-gallery">
                        <p className="text-black text-sm text-left font-semibold mb-2">All (100)</p>
                        <div className="flex">
                            <div className="relative w-full rounded-2xl overflow-hidden">
                                <PhotosCarousel
                                className="photo-wrapper h-80"
                                onSlideChange={onSlideChangeHandler}
                                currentSlideIdx={currentPhotoIdx}
                                >
                                {photos}
                                </PhotosCarousel>
                                <div className="absolute bottom-6 left-6"><ImageLightBox/></div>
                            </div>
                        </div>
                    <PhotosCarousel
                    className="thumbnails-wrapper hidden lg:block"
                    config={thumbnailsCarouselConfig}
                    currentSlideIdx={currentPhotoIdx}
                    >
                    {photos}
                    </PhotosCarousel>
                </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="opacity-50 fixed inset-0 z-[100] bg-black"></div>
        </>
        ) : null}
 {/* Endhotel detail moadal */}
    </div>
  );

}


export default HotelImageSlider