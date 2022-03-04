import React from "react";
import '../App.css';
import '../App.scss';
function ExploreAndFindHotel() {
return (
  <div className="container mx-auto px-4">
    <section className="py-10 md:py-10 px-4 md:px-10 mx-0 bg-orange-200  md:mx-auto rounded-2xl mt-2 mb-0 lg:mb-14">
        <div className="flex items-start flex-wrap relative">
          <div className="w-full px-2 lg:px-6 lg:w-1/3">
            <h4 className="text-primarycolor text-2xl md:text-3xl font-bold mb-2 md:mb-0 ">Explore and find Hotels in India</h4>
            <div className="my-6 lg:my-0 lg:absolute -bottom-20">
                <img className="rounded-2xl w-full" src="assets/img/explore-find-hotel.png" alt="img" />
            </div>
          </div>
          <div className="w-full px-2 lg:px-6 lg:w-2/3 flex items-end justify-end">
          <p className="font-normal text-base text-secondarycolor pr-0 md:pr-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
    </section>
  </div>
);
}
export default ExploreAndFindHotel;