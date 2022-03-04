import React from "react";
import '../App.css';
import '../App.scss';
import ReactReadMoreReadLess from "react-read-more-read-less";
import {Link} from 'react-router-dom';
function RecentReviewCol() {
return (
    <section className="px-0 lg:px-8 bg-white mt-6 mb-6">
          <h4 className="font-bold text-primarylight-333 text-xl pt-2  pb-2 px-2 lg:px-8 ">Recent reviews</h4>
          <div className="pt-4 pb-4 px-2 lg:px-8">
            <div className="flex items-center mb-2 lg:mb-4">
                <div className=" mr-4 ">
                  <img className="rounded-full w-11 h-11" src="assets/img/recentreviewimg.png"/>
                </div>
                <div className="flex flex-col">
                  <Link to="/Reviewer-Details" className="text-base font-semibold text-primarylight-333">Anisha</Link>
                  <ul className="flex mb-1">
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                  </ul>

                </div>
            </div>
            <p className="text-base font-semibold text-primarylight-333">Fastest Service</p>
            <p className="font-normal text-primarylight-333 text-sm mt-2 flex flex-col">
              <ReactReadMoreReadLess
              charLimit={104}
              readMoreText={"More "}
              readLessText={"Less "}
              readMoreClassName="read-more-less--more text-orangecolor mt-2 font-normal"
              readLessClassName="read-more-less--less text-orangecolor mt-2 font-normal"
            >
            I what to compliment Mat & Daniella on the great work they did on seeing my two loans come to fruition. I what to compliment Mat & Daniella on the great work they did on seeing my two loans come to fruition. 
            </ReactReadMoreReadLess>
          </p>           
          </div>
          <div className="pt-4 pb-4 px-2 lg:px-8">
            <div className="flex items-center mb-2 lg:mb-4">
                <div className=" mr-4 ">
                  <img className="rounded-full w-11 h-11" src="assets/img/recentreviewimg.png"/>
                </div>
                <div className="flex flex-col">
                  <Link to="/Reviewer-Details" className="text-base font-semibold text-primarylight-333">Anisha</Link>
                  <ul className="flex mb-1">
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                  </ul>

                </div>
            </div>
            <p className="text-base font-semibold text-primarylight-333">Fastest Service</p>
            <p className="font-normal text-primarylight-333 text-sm mt-2 flex flex-col">
              <ReactReadMoreReadLess
              charLimit={104}
              readMoreText={"More "}
              readLessText={"Less "}
              readMoreClassName="read-more-less--more text-orangecolor mt-2 font-normal"
              readLessClassName="read-more-less--less text-orangecolor mt-2 font-normal"
            >
            I what to compliment Mat & Daniella on the great work they did on seeing my two loans come to fruition. I what to compliment Mat & Daniella on the great work they did on seeing my two loans come to fruition. 
            </ReactReadMoreReadLess>
          </p>           
          </div>
          <div className="pt-4 pb-4 px-2 lg:px-8">
            <div className="flex items-center mb-2 lg:mb-4">
                <div className=" mr-4 ">
                  <img className="rounded-full w-11 h-11" src="assets/img/recentreviewimg.png"/>
                </div>
                <div className="flex flex-col">
                  <Link to="/Reviewer-Details" className="text-base font-semibold text-primarylight-333">Anisha</Link>
                  <ul className="flex mb-1">
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                    <li><i className="fas fa-star fa-sm text-white mr-0.5 bg-green-color p-1 text-xxs"></i></li>
                  </ul>

                </div>
            </div>
            <p className="text-base font-semibold text-primarylight-333">Fastest Service</p>
            <p className="font-normal text-primarylight-333 text-sm mt-2 flex flex-col">
              <ReactReadMoreReadLess
              charLimit={104}
              readMoreText={"More "}
              readLessText={"Less "}
              readMoreClassName="read-more-less--more text-orangecolor mt-2 font-normal"
              readLessClassName="read-more-less--less text-orangecolor mt-2 font-normal"
            >
            I what to compliment Mat & Daniella on the great work they did on seeing my two loans come to fruition. I what to compliment Mat & Daniella on the great work they did on seeing my two loans come to fruition. 
            </ReactReadMoreReadLess>
          </p>           
          </div>
    </section>
);
}
export default RecentReviewCol;