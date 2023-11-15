/* eslint-disable react/button-has-type */

import React from 'react';
import searchIcon from '../Assets/searchIcon.svg';
import Goolgemic from '../Assets/GoogleMic.png';
import GoogleLens from '../Assets/GoogleLens.webp';
import Pencil from '../Assets/Pencil';

function SearchBar() {
  return (
    <div className="relative w-auto">
      <input type="text" className="h-[44px] w-[561px] rounded-[30px] block m-auto z-50 pr-[90px] px-[62px] focus: outline-none shadow-sm border-solid border-2 shadow-black-500/50" placeholder="Search Google or type a URL" />
      <img src={searchIcon} alt="Search Icon" className="absolute left-[540px] bottom-[9px]" />
      <img src={Goolgemic} alt="Microphone, Speak now" className="absolute left-[1010px] bottom-[12px]" height="10px" width="15px" />
      <img src={GoogleLens} alt="Search for Images" className="absolute left-[1030px] bottom-[2px] rounded-2xl" height="10px" width="40px" />
      <button className="absolute top-[440px] py-[6px] px-[2px] left-[1410px] bg-white-300 rounded-2xl w-[180px] border shadow-xl hover:bg-slate-200 font-medium font-sans text-sm text-blue-500"> &nbsp; &nbsp;  Customise Chrome</button>
      <div className="absolute top-[449px] left-[1418px] text-blue-500 mx-1"><Pencil /></div>
    </div>
  );
}

export default SearchBar;
