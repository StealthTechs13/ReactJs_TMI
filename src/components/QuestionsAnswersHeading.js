import React from "react";
import '../App.css';
import '../App.scss';
import { Icrighticon } from "./Icon";
import { Link } from 'react-router-dom';

function QuestionsAnswersHeading() {
return (
  <div className="rounded-b-2xl overflow-auto bg-white border border-borderlight-10">
    <div className="pt-6 lg:pt-8 pb-6 lg:pb-10 px-6 lg:px-8">
      <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row">
        <h4 className="font-bold text-primarycolor text-xl">Questions & Answers</h4>
        <Link to="/Hotel-Review" className="transition duration-500 buttonUnfill flex border border-orangecolor hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor  font-semibold h-10 flex items-center px-4 sm:px-5 rounded-full text-sm mt-2 sm:mt-0">
          <Icrighticon/> Write a Review</Link>
      </div>
    </div>
  </div>
);
}
export default QuestionsAnswersHeading;