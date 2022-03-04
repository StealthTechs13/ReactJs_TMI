import React from "react";
import '../App.css';
import '../App.scss';
function Beheardsection() {
return (
  <section className="py-10 md:py-10 px-4 md:px-16 mx-5 bg-bordergray-50 max-w-4xl mx-5 md:mx-auto rounded-2xl mt-5">
    <div className="container mx-auto px-4">
      <div className="flex items-center flex-wrap ">
      <div className="w-full px-2 md:w-1/2 hidden md:flex ">
          <img src="assets/img/img_beheard.svg" alt="img" />
        </div>
        <div className="w-full px-2 md:w-1/2">
          <h4 className="text-primarycolor text-2xl md:text-3xl font-bold mb-2 md:mb-2 ">Be Heard</h4>
          <p className="font-normal text-base text-secondarycolor pr-0 md:pr-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  </p>
          <button className="transition duration-500 mt-4 md:mt-7 flex border border-orangecolor hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor font-semibold h-10 flex items-center px-5 rounded-full text-sm">Learn how</button>
        </div>
      </div>
    </div>
  </section>
);
}
export default Beheardsection;