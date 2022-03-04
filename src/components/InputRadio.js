import React from "react";
import '../App.css';
import '../App.scss';
import '../Radio-input.scss';

function InputRadio() {

return (
  <section className=" mt-2">
    <div className="mt-4 flex ">
      <div className="flex flex-col px-4 as">
        <label className="labelmain flex items-center">
          <input className="w-5 h-5 mr-4" type="checkbox"/>
            <span class="customcheck"></span>
            Checkbox
        </label>
        <div className="mt-5"></div>
        <label className="labeldisable flex items-center">
          <input className="w-5 h-5 mr-4" type="checkbox"/>
            <span class="customcheck"></span>
            Disabled
        </label>
      </div>
      
      <div className="flex flex-col px-4">
        <div className="flex items-center mb-4">
          <input className="w-5 h-5 cursor-pointer" type="radio" name="role" value="ONE" id="one"/>
          <label class="pl-2 cursor-pointer" for="one">ONE</label>
        </div>
        <div className="flex items-center mb-4">
          <input className="w-5 h-5 cursor-pointer" type="radio" name="role" value="TWO" id="two"/>
          <label class=" pl-2 cursor-pointer" for="two">TWO</label>                
        </div>
        <div className="flex items-center mb-4">
          <input className="w-5 h-5 cursor-pointer disabled" disabled type="radio" name="role" value="TWO" id="two"/>
          <label class=" pl-2 cursor-pointer" for="two">DISABLED</label>                
        </div>
      </div>
    </div>    
  </section>
);
}
export default InputRadio;