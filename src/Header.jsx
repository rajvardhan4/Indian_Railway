import React from 'react'
import mainlog from "./assets/railway 1.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
            <header className="bg-[#ED1D24] text-white flex items-center px-4 py-2 h-[100px] relative top-[9px]">
        <div className="flex items-center justify-center w-[120px] h-[120px] bg-white rounded-full z-10 absolute left-[71px]">
         <Link to="/">
         <img
            src={mainlog}
            alt="Indian Railway Logo"
            className="w-[100px] h-[100px] object-cover"
          />
         </Link>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-[24px] md:text-[32px] font-roboto font-[700]">
            Indian Railway
          </h1>
        </div>
      </header>
    </div>
  )
}

export default Header