/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Bars from '../Assets/bars';
import Photo from '../Assets/Userpfp.jpg';

function NavBar() {
  return (
    <div className="flex p-2 mt-2 justify-end align-middle space-x-1">
      <p className="p-2 mt-2 hover:underline text-sm font-medium font-sans">Gmail</p>
      <p className="p-2 mt-2 hover:underline text-sm font-medium font-sans">Images</p>
      <p className="p-2 ml-2 mt-1 hover:bg-slate-200 rounded-full h-full"><Bars /></p>
      <img className="mb-2 mt-1 ml-4 mr-4 rounded-full hover:bg-slate-300 p-1" src={Photo} alt="User Profile Picture" />
    </div>
  );
}

export default NavBar;
