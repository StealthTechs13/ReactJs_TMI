import React from "react";
import '../App.css';
import '../App.scss';
function QuickLinksFooter() {
return (
  <section className="py-10 md:py-10 px-4 md:px-10 mx-0 bg-light-gray-200  md:mx-auto  mt-6">
    <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <div className="px-2 md:px-4">
        <h5 className="text-sm font-semibold mb-3 text-primarycolor">Hotel</h5>
        <ul className="list-none footer-links">
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Taj Corbett</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">JW Marriott Chandigarh</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Span Resort Manali</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Lemon Tree Dehradun</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Radisson Gorakhpur</a></li>
        </ul>
      </div>
      <div className="px-2 md:px-4">
        <h5 className="text-sm font-semibold mb-3 text-primarycolor">Attraction</h5>
        <ul className="list-none footer-links">
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Taj mahal</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Red Fort Delhi</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Amer Fort</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Badrinath Temple</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Har Ki Pauri</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Ajanta Ellora caves</a></li>
        </ul>
      </div>
      <div className="px-2 md:px-4">
        <h5 className="text-sm font-semibold mb-3 text-primarycolor">Luxury Trains </h5>
        <ul className="list-none footer-links">
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Maharaja Express</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Palace on Wheels</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Ramayana Express</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Vande Bharat</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Golden Chariot</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Deccan Odyssey</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Rajdhani express</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Shatabdi Express</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Buddhist Circuit Train</a></li>
        </ul>
      </div>
      <div className="px-2 md:px-4">
        <h5 className="text-sm font-semibold mb-3 text-primarycolor">Flights </h5>
        <ul className="list-none footer-links">
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Indigo Airlines</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Goibibo Airlines</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Spice jet</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Vistara Airlines</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Air Asia</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Air India </a></li>
        </ul>
      </div>
      <div className="px-2 md:px-4">
        <h5 className="text-sm font-semibold mb-3 text-primarycolor">Airports</h5>
        <ul className="list-none footer-links">
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Delhi Airport</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Mumbai Airport</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Dehradun Airport</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Bangalore Airport</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Jaipur Airport</a></li>
          <li className="mb-1"><a href="#" className="text-secondarycolor text-sm font-normal">Hyderabad Airport</a></li>
        </ul>
      </div>
    </div>
    </div>
  </section>
);
}
export default QuickLinksFooter;