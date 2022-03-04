import React from "react";
import '../App.css';
import '../App.scss';
import ReactReadMoreReadLess from "react-read-more-read-less";
import { IcUserReview, IcUserLocation, IcUserLike,} from "./Icon";
import ShareButton from "./ShareButton";
function UserReviewBoxCol() {
 
return (
  <section className="rounded-2xl bg-white border border-borderlight-10 mt-4 md:mt-5">
    <div className=" pt-4 lg:pt-4 px-6 lg:px-8 ">
      <div className="flex items-center pb-4 border-b border-bordergray-200">
        <img className="rounded-full w-12 h-12 mr-4 lg:mr-6" src="assets/img/userProfile.jpg" alt="user image"/>
        <div className="userDetail flex flex-col">
          <h6 className="font-semibold text-primarycolor text-base">Ogden Maldonado</h6>
          <div className="flex mt-1">
            <div className="flex items-center mr-4"><IcUserReview/><p className="ml-2">5 reviews</p></div>
            <div className="flex items-center"><IcUserLocation/><p className="ml-2">US</p></div>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-8 lg:pt-6 pb-8 lg:pb-10 px-6 lg:px-8">
      <ul className="flex mb-4 lg:mb-6">
        <li className="mr-1"><img className="w-14 h-14 rounded-2xl" src="assets/img/reviewuploadimg.png" alt="img"/></li>
        <li className="mr-1"><img className="w-14 h-14 rounded-2xl" src="assets/img/reviewuploadimg.png" alt="img"/></li>
        <li className="mr-1"><img className="w-14 h-14 rounded-2xl" src="assets/img/reviewuploadimg.png" alt="img"/></li>
        <li className="mr-1"><img className="w-14 h-14 rounded-2xl" src="assets/img/reviewuploadimg.png" alt="img"/></li>
      </ul>
      <ul className="flex mb-4">
        <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
        <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
        <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
        <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
        <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
      </ul>
      <div className="mb-4 lg:mb-6">
        <h6 className="font-semibold text-primarycolor text-base mb-2">Hospitality at its best!</h6>
        <p className="text-secondarycolor flex flex-col">
          <ReactReadMoreReadLess
          charLimit={235}
          readMoreText={"Read more ▼"}
          readLessText={"Read less ▲"}
          readMoreClassName="read-more-less--more text-orangecolor font-semibold"
          readLessClassName="read-more-less--less text-orangecolor font-semibold"
        >
          Luxurious hotel in a beautiful location, sumptuous food and exceptionally courteous staff that makes an effort to connect on a personal level, made it a very enjoyable vacation. Highly recommend if planning to visit Shimla or Mashobra. Luxurious hotel in a beautiful location, sumptuous food and exceptionally courteous staff that makes
        </ReactReadMoreReadLess>
        </p>
      </div>
      <div className="mb-4 lg:mb-6">
        <p className="text-secondarycolor"><b>Date of stay:</b> November 2021</p>
        <p className="text-secondarycolor"><b>Trip type:</b> Travelled on business</p>
      </div>
      <div className="mb-4 lg:mb-6 flex items-center">
        <button className="text-secondarycolor font-semibold flex items-center"><IcUserLike/> Helpful</button>
        <ShareButton/>
      </div>
    </div>
  </section>
);
}
export default UserReviewBoxCol;