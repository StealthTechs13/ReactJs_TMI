import React from "react";
import '../App.css';
import '../App.scss';
function Faqsection() {
return (
  <section className="py-10 md:py-10 px-0 md:px-0 max-w-4xl  md:mx-auto rounded-2xl">
    <div className="container mx-auto px-4">
      <h4 className="text-primarycolor text-2xl md:text-3xl font-bold mb-2 md:mb-2 text-center">Frequently Asked Questions</h4>
      <p className="font-normal text-base text-center text-secondarycolor">Explore what’s nearby</p>
      <div className="mt-6 lg:mt-8 pt-2 border-t border-bordergray-200">
      <div className="accordion">
            <div className="tab w-full overflow-hidden border-bordergray-200">
               <input className="absolute opacity-0 " id="tab-multi-one" type="radio" defaultChecked name="tabs"/>
               <label className="flex justify-between items-center px-0 pt-4 pb-2 md:p-4 text-sm text-primarycolor font-bold leading-normal cursor-pointer" for="tab-multi-one"><div className="flex w-full pr-3 lg:pr-0"><img className="mr-3 md:mr-5 inline-flex -mt-1" width={'12px'} src="assets/img/ic_search.svg" alt="search icon" />The land which has undoubtedly its own way of life the land that showcases</div></label>
               <div className="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal">
                  <p className="pt-3 pb-6 px-5 md:px-12 text-sm font-normal text-secondarycolor">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
               </div>
            </div>
            <div className="tab w-full overflow-hidden border-t border-bordergray-200">
               <input className="absolute opacity-0" id="tab-multi-two" type="radio" name="tabs"/>
               <label className="flex justify-between items-center px-0 pt-4 pb-2 md:p-4 text-sm text-primarycolor font-bold leading-normal cursor-pointer" for="tab-multi-two"><div className="flex w-full pr-3 lg:pr-0"><img className="mr-3 md:mr-5 inline-flex -mt-1" width={'12px'} src="assets/img/ic_search.svg" alt="search icon" />The land which has undoubtedly its own way of life the land that showcases</div></label>
               <div className="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal">
                  <p className="pt-3 pb-6 px-5 md:px-12 text-sm font-normal text-secondarycolor">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
                     <div className=" pt-3 pb-6 px-5 md:px-12 text-sm font-normal text-secondarycolor">
                        <div className="flex flex-wrap">
                           <div className="w-60  border border-bordergray-200 flex mx-2 my-2 rounded-2xl px-4 py-2">
                              <img className="rounded-full w-12 h-12 mr-3 lg:mr-4" src="assets/img/userProfile.jpg" alt="user image"/>
                                 <div className="userDetail flex flex-col">
                                 <h6 className="font-semibold text-primarycolor text-base">Mohan Shakti Heritage Park</h6>
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
                                 <div className="flex mt-1">
                                    <div className="flex items-center mr-4">
                                       <p className="ml-2 text-xs">156 reviews</p>
                                       </div>
                                    </div>
                                 </div>
                           </div>
                           <div className="w-60  border border-bordergray-200 flex mx-2 my-2 rounded-2xl px-4 py-2">
                              <img className="rounded-full w-12 h-12 mr-3 lg:mr-4" src="assets/img/userProfile.jpg" alt="user image"/>
                                 <div className="userDetail flex flex-col">
                                 <h6 className="font-semibold text-primarycolor text-base">Mohan Shakti Heritage Park</h6>
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
                                 <div className="flex mt-1">
                                    <div className="flex items-center mr-4">
                                       <p className="ml-2 text-xs">156 reviews</p>
                                       </div>
                                    </div>
                                 </div>
                           </div>
                           <div className="w-60  border border-bordergray-200 flex mx-2 my-2 rounded-2xl px-4 py-2">
                              <img className="rounded-full w-12 h-12 mr-3 lg:mr-4" src="assets/img/userProfile.jpg" alt="user image"/>
                                 <div className="userDetail flex flex-col">
                                 <h6 className="font-semibold text-primarycolor text-base">Mohan Shakti Heritage Park</h6>
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
                                 <div className="flex mt-1">
                                    <div className="flex items-center mr-4">
                                       <p className="ml-2 text-xs">156 reviews</p>
                                       </div>
                                    </div>
                                 </div>
                           </div>
                        </div>
                  </div>
               </div>
            </div>
            <div className="tab w-full overflow-hidden border-t border-bordergray-200 ">
               <input className="absolute opacity-0" id="tab-multi-three" type="radio" name="tabs"/>
               <label className="flex justify-between items-center px-0 pt-4 pb-2 md:p-4 text-sm text-primarycolor font-bold leading-normal cursor-pointer" for="tab-multi-three"><div className="flex w-full pr-3 lg:pr-0"><img className="mr-3 md:mr-5 inline-flex -mt-1" width={'12px'} src="assets/img/ic_search.svg" alt="search icon" />The land which has undoubtedly its own way of life the land that showcases</div></label>
               <div className="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal">
                  <p className="pt-3 pb-6 px-5 md:px-12 text-sm font-normal text-secondarycolor">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
               </div>
            </div>
            <div className="tab w-full overflow-hidden border-t border-bordergray-200 border-b">
               <input className="absolute opacity-0" id="tab-multi-four" type="radio" name="tabs"/>
               <label className="flex justify-between items-center px-0 pt-4 pb-2 md:p-4 text-sm text-primarycolor font-bold leading-normal cursor-pointer" for="tab-multi-four"><div className="flex w-full pr-3 lg:pr-0"><img className="mr-3 md:mr-5 inline-flex -mt-1" width={'12px'} src="assets/img/ic_search.svg" alt="search icon" />The land which has undoubtedly its own way of life the land that showcases</div></label>
               <div className="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal">
                  <p className="pt-3 pb-6 px-5 md:px-12 text-sm font-normal text-secondarycolor">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  </section>
  
);
}
export default Faqsection;