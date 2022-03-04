import React, {useState} from "react";
import '../App.css';
import '../App.scss';
import {IcPictureIocn,IcCrossICon, IcEmoji, IcClose, IcDelete, Icemail} from "./Icon";
import ImageUploading from "react-images-uploading";
import ReactStars from "react-rating-stars-component";
import HotelReviewLocation from './HotelReviewLocation';
import ReactReadMoreReadLess from "react-read-more-read-less";
import Picker from 'emoji-picker-react';
function HotelReviewForm() {
  // const [ text, setText ] = useState('')
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const ratingExample = {
    size: 20,
    count: 5,
    isHalf: false,
    value: 0,
    color: "white",
    activeColor: "#4caf50",
    // backgroundColor:"#4caf50",
    onChange: newValue => {
      console.log(`Rating 5: new value is ${newValue}`);
    }
  };

const [showModal, setShowModal] = React.useState(false);



function handleOnEnter (text) {
  console.log('enter', text)
}
const [inputStr, setInputStr] = useState('');
const [showPicker, setShowPicker] = useState(false);

const onEmojiClick = (event, emojiObject) => {
  setInputStr(prevInput => prevInput + emojiObject.emoji);
  setShowPicker(false);
};
return (
    <section className="px-0 bg-white lg:pr-20 mt-8 lg:mt-0 mb-2 lg:mb-0">
        <HotelReviewLocation/>
          <div className="form">
            <form className="mt-6">
              <div className="form-field flex flex-col mb-8">
                <label className="text-sm font-normal text-primarylight-333 mb-2">Travel Period</label>
                <div className="flex">
                    <select className="text-sm border border-bordergray-200 p-2 mr-2 w-full text-light-gray-t focus:outline-none h-10">
                      <option className="text-light-gray-t" selected disabled value="month">Month</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <select className="text-sm border border-bordergray-200 p-2 w-full text-light-gray-t focus:outline-none h-10">
                      <option className="text-light-gray-t" selected disabled value="month">Year</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                    </select>
                  </div>
              </div>
              <div className="form-field flex flex-col mb-8">
                <label className="text-sm font-normal text-primarylight-333 mb-2">Title of your review</label>
                <input className="text-sm border border-bordergray-200 p-2 mr-2 w-full text-light-gray-t focus:outline-none h-10"/>
              </div>
              <div className="form-field flex flex-col mb-8 relative">
                <label className="text-sm font-normal text-primarylight-333 mb-2">Your review</label>
                <div className="picker-container">
                  <textarea
                    className="input-style text-sm border resize-none border-bordergray-200 p-2 mr-2 w-full text-light-gray-t focus:outline-none h-28  absolute left-0 w-full top-7"
                    placeholder="What’s on your mind,?"
                    value={inputStr}
                    onChange={e => setInputStr(e.target.value)} />
                  
                  {showPicker && <Picker
                    pickerStyle={{ width: '100%' }}
                    onEmojiClick={onEmojiClick} />}
                </div>
                {/* <InputEmoji
                  value={text}
                  onChange={setText}
                  cleanOnEnter
                  onEnter={handleOnEnter}
                /> */}
                <textarea className="text-sm border resize-none border-bordergray-200 p-2 mr-2 w-full text-light-gray-t focus:outline-none h-28" placeholder="What’s on your mind,?"/>
                <div className="relative imgUploader -mt-1 bg-textareaimgbg border-t-0 border border-bordergray-200 px-4">
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
                      <div className="upload__image-wrapper flex flex-col">
                        <div className="flex">
                          <button type="button"
                          className="flex items-center h-11"
                            style={isDragging ? { color: "red" } : null}
                            onClick={onImageUpload}
                            {...dragProps}
                          >
                          <IcPictureIocn/>  Upload Photo
                          </button>
                          <button type="button"
                          onClick={() => setShowPicker(val => !val)}
                          className="flex items-center h-11 ml-8"
                          >
                          <IcEmoji/>  Emoji
                          </button>
                        </div>
                        <div className="flex flex-wrap">
                          {imageList.map((image, index) => (
                              <div key={index} className="image-item flex mx-1.5 lg:mx-4 my-3 lg:my-3 rounded-md">
                                <img className="upload__image-wrapper flex flex-col-reverse w-10 h-10 rounded-md object-cover" src={image.data_url} alt="" />
                                <div className="image-item__btn-wrapper flex flex-col ml-0 lg:ml-1">
                                  {/* <button  type="button" onClick={() => onImageUpdate(index)}><IcEdit/></button> */}
                                  <button  type="button" onClick={() => onImageRemove(index)}><IcCrossICon/></button>
                                </div>
                              </div>
                          ))}
                        </div>  
                      </div>
                    )}
                </ImageUploading>
                </div>
                <p className="text-xs mt-4 text-secondarycolor">To give more weightage to your review upload photos ( It helps others to understand better )</p>
              </div>
              <div className="form-field flex flex-col mb-8">
                <h6 className="text-primarycolor font-bold text-base pb-3 mb-3 border-b border-bordergray-200">Type of Travel</h6>
                <ul className="mt-2 flex flex-nowrap overflow-auto whitespace-nowrap md:flex-wrap">
                <li className="mr-2 mb-2"><button type="button" className="text-sm text-black font-normal font-semibold px-3.5 shadow-sm py-2 border border-inputborder transition duration-500 hover:bg-orangecolor hover:border-orangecolor hover:text-white capitalize">individual</button></li>
                <li className="mr-2 mb-2"><button type="button" className="text-sm text-black font-normal font-semibold px-3.5 shadow-sm py-2 border border-inputborder transition duration-500 hover:bg-orangecolor hover:border-orangecolor hover:text-white capitalize">Family</button></li>
                <li className="mr-2 mb-2"><button type="button" className="text-sm text-black font-normal font-semibold px-3.5 shadow-sm py-2 border border-inputborder transition duration-500 hover:bg-orangecolor hover:border-orangecolor hover:text-white capitalize">Friends</button></li>
                <li className="mr-2 mb-2"><button type="button" className="text-sm text-black font-normal font-semibold px-3.5 shadow-sm py-2 border border-inputborder transition duration-500 hover:bg-orangecolor hover:border-orangecolor hover:text-white capitalize">Couple</button></li>
                <li className="mr-2 mb-2"><button type="button" className="text-sm text-black font-normal font-semibold px-3.5 shadow-sm py-2 border border-inputborder transition duration-500 hover:bg-orangecolor hover:border-orangecolor hover:text-white capitalize">Business</button></li>
                <li className="mr-2 mb-2"><button type="button" className="text-sm text-black font-normal font-semibold px-3.5 shadow-sm py-2 border border-inputborder transition duration-500 hover:bg-orangecolor hover:border-orangecolor hover:text-white capitalize">with kids</button></li>
                </ul>
              </div>
              <div className="form-field flex flex-col mb-8">
                <h6 className="text-primarycolor font-bold text-base pb-3 mb-3 lg:mb-6  border-b border-bordergray-200">Your Over all rating</h6>
                <div className="flex items-center ratringStar mt-2"><ReactStars {...ratingExample} /><p className="text-sm font-normal text-primarylight-333 ml-2 md:ml-4">Click to rate</p></div>
              </div>
              <div className="form-field flex flex-col mb-10">
                <h6 className="text-primarycolor font-bold text-sm mb-2">Help others to take decisions </h6>
                <div className="flex items-center ratringStar mt-3"><p className="w-20 text-sm font-normal text-primarylight-333 mr-1">Location</p><ReactStars {...ratingExample} /><p className="text-sm font-normal text-primarylight-333 ml-2 md:ml-4">Click to rate</p></div>
                <div className="flex items-center ratringStar mt-3"><p className="w-20 text-sm font-normal text-primarylight-333 mr-1">Service</p><ReactStars {...ratingExample} /><p className="text-sm font-normal text-primarylight-333 ml-2 md:ml-4">Click to rate</p></div>
                <div className="flex items-center ratringStar mt-3"><p className="w-20 text-sm font-normal text-primarylight-333 mr-1">Rooms</p><ReactStars {...ratingExample} /><p className="text-sm font-normal text-primarylight-333 ml-2 md:ml-4">Click to rate</p></div>
                <div className="flex items-center ratringStar mt-3"><p className="w-20 text-sm font-normal text-primarylight-333 mr-1">Hygine</p><ReactStars {...ratingExample} /><p className="text-sm font-normal text-primarylight-333 ml-2 md:ml-4">Click to rate</p></div>
                <div className="flex items-center ratringStar mt-3"><p className="w-20 text-sm font-normal text-primarylight-333 mr-1">Children friendly</p><ReactStars {...ratingExample} /><p className="text-sm font-normal text-primarylight-333 ml-2 md:ml-4">Click to rate</p></div>
              </div>
              <div className="form-field flex flex-col mb-8">
                <label className="text-sm font-normal text-primarylight-333 mb-2">Any tips for other travelers</label>
                <textarea className="text-sm border border-bordergray-200 p-2 mr-2 w-full h-24 resize-none text-light-gray-t focus:outline-none" placeholder="Optional"/>
              </div>
              <div className="form-field flex flex-col mb-2 lg:mb-8">
                <h6 className="text-primarycolor font-bold text-base pb-3 mb-4 border-b border-bordergray-200">Do you have photos to share?</h6>
                <button 
                  onClick={() =>
                  setShowModal(true)} 
                  type="button"
                  className="transition duration-500 flex border border-orangecolor hover:bg-orangecolor hover:text-white hover:border-orangecolor text-orangecolor bg-white font-semibold h-10 w-32 flex items-center justify-center px-3 md:px-5 rounded-full text-sm">Add a photo
                  </button>           
                  <div className="uploadimgCard mt-6">
                    <div className="flex justify-between items-start  border border-bordergray-200 rounded-md py-2 px-4 mb-4">
                      <div className="flex w-full pr-4">
                          <img className="rounded-full w-12 lg:w-16 h-12 lg:h-16 object-cover mr-2" src="assets/img/bestplace4.png" alt="img"/>
                          <div className="flex flex-col py-0 lg:py-2.5 w-full">
                            <p className=" text-sm font-normal text-primarylight-333 mb-1 flex"><b className="mr-1">Category:</b> Dining</p>
                            <p className=" text-sm font-normal text-primarylight-333 flex flex-col lg:flex-row"><b className="mr-1">Description:</b> 
                            <span className="flex flex-col">
                              <ReactReadMoreReadLess
                                charLimit={90}
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
                    <div className="flex justify-between items-start  border border-bordergray-200 rounded-md py-2 px-4 mb-4">
                      <div className="flex w-full pr-4">
                          <img className="rounded-full w-12 lg:w-16 h-12 lg:h-16 object-cover mr-2" src="assets/img/bestplace4.png" alt="img"/>
                          <div className="flex flex-col py-0 lg:py-2.5 w-full">
                            <p className=" text-sm font-normal text-primarylight-333 mb-1 flex "><b className="mr-1">Category:</b> Dining</p>
                            <p className=" text-sm font-normal text-primarylight-333 flex flex-col lg:flex-row"><b className="mr-1">Description:</b>
                            <span className="flex flex-col">
                              <ReactReadMoreReadLess
                                charLimit={90}
                                readMoreText={"Read more"}
                                readLessText={"Read less"}
                                readMoreClassName="read-more-less--more text-primarycolor font-semibold"
                                readLessClassName="read-more-less--less text-primarycolor font-semibold"
                            >
                              Testm1
                            </ReactReadMoreReadLess>
                            </span>
                            </p>
                          </div>
                      </div>
                          <IcDelete/>
                    </div>
                  </div>
                  <div className="readcarefully mt-2">
                    <label className="w-full flex items-start text-textlightgray font-normal my-6">
                      <input className="mr-2 md:mr-4 mt-0.5 border-inputborder border w-4 h-4 rounded-sm" type="checkbox"/>
                      <span className="w-full font-normal text-primarycolor text-sm flex flex-col"><b className="mb-1">Submit your review</b>Laundry, 24x7 Accessible Kitchen, Room Ventilation, Complimentary Breakfast, Complimentary Veg Breakfast, Laundry service, Parking Facility, Room Service, Free Wifi, Geyser, Modern Wardrobe, TV, In-house Restaurant, Room Area, Bath Tub, Card Payment, Power backup, Fan, Mirror, CCTV Cameras are some of the amenities available at this property.</span>
                    </label>
                  </div>
                  <div className="mt-4 mb-0 lg:mb-8">
                    <button type="button" className="transition duration-200 transition duration-200 buttonFill flex bg-orangecolor hover:bg-white hover:text-orangecolor border border-orangecolor-200 text-white font-medium h-10 flex items-center px-5 rounded-full text-sm">Submit Review</button>
                  </div>
              </div>
            </form> 
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
                          setShowModal(false)}
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
                                        <hr className="border-inputborder border-1 w-full rounded-md"></hr>
                                        <label className="block font-normal text-xs sm:text-sm text-textlightgray bg-light-gray-200 px-4">Or</label>
                                        <hr className="border-inputborder border-1 w-full rounded-md"></hr>
                                      </div>
                                      <p className="text-sm text-orangecolor font-semibold">Drag and drop photos at any time</p>
                                    <div className="flex flex-wrap ">
                                      {imageList.map((image, index) => (
                                          <div key={index} className="image-item flex items-center mx-4 mt-4 rounded-md">
                                            <img className="" src={image.data_url} alt="" />
                                            <div className="image-item__btn-wrapper flex flex-col ml-1">
                                              {/* <button  type="button" onClick={() => onImageRemove(index)}><IcCrossICon/></button> */}
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
export default HotelReviewForm;