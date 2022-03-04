import React from "react";
import '../App.css';
import '../App.scss';
import { IcClose, IcDelete, } from "./Icon";
import ImageUploading from "react-images-uploading";
import ReactReadMoreReadLess from "react-read-more-read-less";
import SuggestEditInfoListing from '../components/SuggestEditInfoListing';
function AttrectionFaqsection() {
const [showModal, setShowModal5] = React.useState(false);
const [images, setImages] = React.useState([]);
const maxNumber = 69;
const onChange = (imageList, addUpdateIndex) => {
// data for submit
console.log(imageList, addUpdateIndex);
setImages(imageList);
};
return (
<section className="pt-4 py-10 md:py-10 px-0 md:px-0 max-w-4xl  md:mx-auto rounded-2xl">
   <div className="container mx-auto px-4">
      {/* 
      <h4 className="text-primarycolor text-2xl md:text-3xl font-bold mb-2 md:mb-2 text-center">Frequently Asked Questions</h4>
      <p className="font-normal text-base text-center text-secondarycolor">Explore what’s nearby</p>
      */}
      <div className=" pt-2 ">
         <div className="accordion">
            <div className="tab w-full overflow-hidden border-bordergray-200">
               <input className="absolute opacity-0 " id="tab-multi-one" type="radio" defaultChecked name="tabs"/>
               <label className="flex justify-between items-center px-0 pt-4 pb-2 md:p-4 text-sm text-primarycolor font-bold leading-normal cursor-pointer" for="tab-multi-one">
                  <div className="flex w-full pr-3 lg:pr-0 text-base md:text-lg lg:text-xl font-bold">Suggest an edit to this listing</div>
               </label>
               <div className="tab-content ">
                  <div className="pt-3 pb-6 px-0 lg:px-5 md:px-12 text-sm font-normal text-secondarycolor border-t border-bordergray-200">
                     <SuggestEditInfoListing/>
                  </div>
               </div>
            </div>
            <div className="tab w-full overflow-hidden border-t border-bordergray-200">
               <input className="absolute opacity-0" id="tab-multi-two" type="radio" name="tabs"/>
               <label className="flex justify-between items-center px-0 pt-4 pb-2 md:p-4 text-sm text-primarycolor font-bold leading-normal cursor-pointer" for="tab-multi-two">
                  <div className="flex w-full pr-3 lg:pr-0 text-base md:text-lg lg:text-xl font-bold">This place has closed permanently</div>
               </label>
               <div className="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal ">
                  <div className="pt-3 pb-6 px-0 lg:px-5 md:px-12 text-sm font-normal text-secondarycolor border-t border-bordergray-200">
                     <form>
                        <div className="max-w-sm mx-auto">
                           <div className="form-field flex flex-col mb-4">
                              <label className="text-sm font-normal text-primarylight-333 mb-2">Comments</label>
                              <textarea className="text-sm border border-bordergray-200 p-2 mr-2 w-full h-20 resize-none text-light-gray-t focus:outline-none"/>
                           </div>
                           <div className="form-field flex flex-col mb-4">
                              <label className="text-sm font-normal text-primarylight-333 mb-2">Do you have photos to share?</label>
                              <button 
                                 onClick={() =>
                              setShowModal5(true)} 
                              type="button"
                              className="transition duration-500 flex border border-orangecolor hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 w-32 flex items-center justify-center px-3 md:px-5 rounded-full text-sm">Add a photo
                              </button>  
                           </div>
                           <div className="form-field flex flex-col mb-4">
                              <div className="uploadimgCard mt-6">
                                 <div className="flex justify-between items-start  border border-bordergray-200 rounded-md py-2 px-4 mb-4">
                                    <div className="flex w-full pr-4">
                                       <img className="rounded-full w-12 lg:w-16 h-12 lg:h-16 object-cover mr-2" src="assets/img/bestplace4.png" alt="img"/>
                                       <div className="flex flex-col py-0 lg:py-2.5 w-full">
                                          <p className=" text-sm font-normal text-primarylight-333 mb-1 flex"><b className="mr-1">Category:</b> Dining</p>
                                          <p className=" text-sm font-normal text-primarylight-333 flex flex-col lg:flex-row"><b className="mr-1">Description:</b> 
                                             <span className="flex flex-col">
                                             <ReactReadMoreReadLess
                                             charLimit={20}
                                             readMoreText={"Read more"}
                                             readLessText={"Read less"}
                                             readMoreClassName="read-more-less--more text-primarycolor font-semibold"
                                             readLessClassName="read-more-less--less text-primarycolor font-semibold"
                                             >
                                             Luxurious hotel in a beautiful location, sumptuous food and exceptionally courteous staff that makes an effort to connect on a personal level, made it a very enjoyable vacation. Highly recommend if planning to visit Shimla or Mashobra. Luxurious hotel in a beautiful location, sumptuous food and exceptionally courteous staff that makes
                                             </ReactReadMoreReadLess>
                                             </span>
                                          </p>
                                       </div>
                                    </div>
                                    <button type="button"
                                       >
                                       <IcDelete/>
                                    </button>
                                 </div>
                              </div>
                           </div>
                           <div className="w-full flex items-center mt-4">
                              <button type="button" className="transition duration-500 flex border border-orangecolor hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 w-28 flex items-center justify-center px-3 md:px-5 rounded-full text-sm"> Save </button>
                              <button type="button" className="transition duration-500 flex  hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 w-28 flex items-center justify-center px-3 md:px-5 rounded-full text-sm ml-4">Cancel</button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <div className="tab w-full overflow-hidden border-t border-bordergray-200 ">
               <input className="absolute opacity-0" id="tab-multi-three" type="radio" name="tabs"/>
               <label className="flex justify-between items-center px-0 pt-4 pb-2 md:p-4 text-sm text-primarycolor font-bold leading-normal cursor-pointer" for="tab-multi-three">
                  <div className="flex w-full pr-3 lg:pr-0 text-base md:text-lg lg:text-xl font-bold">This place does not exist</div>
               </label>
               <div className="tab-content overflow-hidden bg-gray-100 border-indigo-500 leading-normal ">
                  <div className="pt-3 pb-6 px-0 lg:px-5 md:px-12 text-sm font-normal text-secondarycolor border-t border-bordergray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</div>
               </div>
            </div>
         </div>
      </div>
   </div>
   {/* Add photo modal */}
   {showModal ? (
   <>
   <div
      className="justify-center items-start md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[110] outline-none focus:outline-none top-0"
      >
      <div className="relative w-full my-6 mx-auto max-w-xl h-screen scroll mt-0 md:mt-10 flex 2xl:items-center items-start">
         <div className="border-0  sm:rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-screen overflow-auto xl:h-auto">
            <div className="flex items-center justify-between p-5 border-b border-bordergray-200">
               <h3 className="text-primarycolor text-md lg:text-lg pr-2 font-bold capitalize">
                  Add photos of Taj Mahal Palace
               </h3>
               <button
                  className="ml-auto bg-transparent border-0 text-primarcolor float-right  leading-none  outline-none focus:outline-none"
                  onClick={() =>
                  setShowModal5(false)}
                  >
                  <IcClose/>
               </button>
            </div>
            <div className="relative px-4 py-5 sm:py-7 sm:px-7 flex-auto overflow-auto">
               <div className="w-full h-80 border-dashed border-bordergray-200 border bg-light-gray-200 hidden">
                  <div className="imgUploadimg w-full h-full">
                     <ImageUploading
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                        >
                        {({
                        imageList,
                        onImageUpload,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps
                        }) => (
                        // write your building UI
                        <div className="upload__image-wrapper flex justify-center items-center flex-col w-full h-full"  
                           {...dragProps}>
                           <div className="flex justify-center">
                              <button type="button"
                              className="transition duration-200 transition duration-200 buttonFill flex bg-orangecolor hover:bg-white hover:text-orangecolor border border-orangecolor-200 text-white font-medium h-10 flex items-center px-5 rounded-full text-sm"
                              style={isDragging ? { color: "red" } : null}
                              onClick={onImageUpload}
                              >
                              Select photos from your computer
                              </button>
                           </div>
                           <div className="flex mt-8 mb-6 items-center text-center w-full">
                              <hr className="border-inputborder border-1 w-full rounded-md">
                              </hr>
                              <label className="block font-normal text-xs sm:text-sm text-textlightgray bg-light-gray-200 px-4">Or</label>
                              <hr className="border-inputborder border-1 w-full rounded-md">
                              </hr>
                           </div>
                           <p className="text-sm text-orangecolor font-semibold">Drag and drop photos at any time</p>
                           <div className="flex flex-wrap ">
                              {imageList.map((image, index) => (
                              <div key={index} className="image-item flex items-center mx-4 mt-4 rounded-md">
                                 <img className="" src={image.data_url} alt="" />
                                 <div className="image-item__btn-wrapper flex flex-col ml-1">
                                    {/* 
                                    <button  type="button" onClick={() =>
                                       onImageRemove(index)}>
                                       <IcCrossICon/>
                                    </button>
                                    */}
                                 </div>
                              </div>
                              ))}
                           </div>
                        </div>
                        )}
                     </ImageUploading>
                  </div>
               </div>
               {/* after upload image modal */}
               <div className="w-full p-4 sm:p-6 border-bordergray-200 border bg-light-gray-200">
                  <div className="flex flex-col sm:flex-row ">
                     <div className="w-full sm:w-1/5 sm:px-2 flex sm:justify-center mb-6 sm:mb-0">
                        <img className="rounded-md w-16 h-16 object-cover" src="assets/img/bestplace4.png" alt="upload img"/>
                     </div>
                     <div className="w-full sm:w-4/5 sm:px-2">
                        <h5 className="text-base text-primarylight-333 font-semibold mb-2 sm:mb-4">Photo category</h5>
                        <div className="flex flex-col sm:flex-row">
                           <div className="w-full sm:w-1/2 px-1 mb-4 sm:mb-0">
                              <p className="text-sm text-primarylight-333 font-semibold mb-2">Hotel & Amenities</p>
                              <form>
                                 <div className="selectCheck">
                                    <div className="flex items-center mb-1.5 text-xs">
                                       <input className="w-5 h-5 mr-2" type="radio" value="Dining" name="Radio" /> Dining
                                    </div>
                                    <div className="flex items-center mb-1.5 text-xs">
                                       <input className="w-5 h-5 mr-2" type="radio" value="Hotel & grounds" name="Radio" /> Hotel & grounds
                                    </div>
                                    <div className="flex items-center mb-1.5 text-xs">
                                       <input className="w-5 h-5 mr-2" type="radio" value="Pool/Beach area" name="Radio" /> Pool/Beach area
                                    </div>
                                    <div className="flex items-center mb-1.5 text-xs">
                                       <input className="w-5 h-5 mr-2" type="radio" value="Family/Play areas " name="Radio" /> Family/Play areas 
                                    </div>
                                    <div className="flex items-center mb-1.5 text-xs">
                                       <input className="w-5 h-5 mr-2" type="radio" value="Business centre/Function" name="Radio" /> Business centre/Function
                                    </div>
                                    <div className="flex items-center mb-1.5 text-xs">
                                       <input className="w-5 h-5 mr-2" type="radio" value="Other" name="Radio" /> Other
                                    </div>
                                 </div>
                              </form>
                           </div>
                           <div className="w-full sm:w-1/2 px-1">
                              <p className="text-sm text-primarylight-333 font-semibold mb-2">Room</p>
                              <form>
                                 <div className="selectCheck">
                                    <div className="flex items-center mb-1.5 text-xs">
                                       <input className="w-5 h-5 mr-2" type="radio" value="Room/suite" name="Radio" /> Room/suite
                                    </div>
                                    <div className="flex items-center mb-1.5 text-xs">
                                       <input className="w-5 h-5 mr-2" type="radio" value="Bathroom" name="Radio" /> Bathroom
                                    </div>
                                    <div className="flex items-center mb-1.5 text-xs">
                                       <input className="w-5 h-5 mr-2" type="radio" value="View from room" name="Radio" /> View from room
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex justify-end mt-4">
                     <div className="w-full sm:w-4/5 sm:px-2">
                        <div className="flex sm:justify-between sm:items-center mb-1 flex-col sm:flex-row">
                           <p className="text-sm text-primarylight-333 font-semibold">Photo description</p>
                           <p className="text-sm text-primarylight-333 font-normal">(500 characters maximum)</p>
                        </div>
                        <textarea className="text-sm border resize-none border-bordergray-200 p-2 mr-2 w-full text-light-gray-t focus:outline-none h-12"/>
                     </div>
                  </div>
               </div>
               {/* end after img upload */}
               <label className="w-full flex items-center text-textlightgray font-normal my-6">
               <input className="mr-2 md:mr-4 mt-0 border-inputborder border w-5 h-5 sm:w-4 sm:h-4 rounded-sm" type="checkbox"/>
               <span className="font-normal text-primarycolor text-sm">I am the owner of these photos and I accept Tripadvisor's</span>
               </label>
               <div className="mt-10">
                  <div className="flex justify-between items-center border-t border-bordergray-200 pt-6">
                     <button className="transition duration-500 flex border border-orangecolor hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 flex items-center px-3 md:px-5 rounded-full text-sm">
                        <ImageUploading
                           multiple
                           value={images}
                           onChange={onChange}
                           maxNumber={maxNumber}
                           dataURLKey="data_url"
                           >
                           {({
                           imageList,
                           onImageUpload,
                           onImageUpdate,
                           onImageRemove,
                           isDragging,
                           dragProps
                           }) => (
                           // write your building UI
                           <div className="upload__image-wrapper flex flex-col-reverse">
                              <div className="flex">
                                 <button type="button"
                                 className="flex items-center h-11"
                                 style={isDragging ? { color: "red" } : null}
                                 onClick={onImageUpload}
                                 {...dragProps}
                                 > Add more photo
                              </button>
                           </div>
                        </div>
                     )}
                     </ImageUploading> 
                     </button>
                     <button className="transition duration-200 transition duration-200 buttonFill flex bg-orangecolor hover:bg-white hover:text-orangecolor border border-orangecolor-200 text-white font-medium h-10 flex items-center px-5 rounded-full text-sm">Upload</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="opacity-50 fixed inset-0 z-[100] bg-black"></div>
   </>
   ) : null}
   {/*End Add photo modal */}
</section>
);
}
export default AttrectionFaqsection;