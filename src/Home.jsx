import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import { FaPlus } from "react-icons/fa";
import Latest from "./Latest";
import All from "./ALL";


function Home() {
  const [view, setView] = useState("ALL");
  const [latestData, setLatestData] = useState([]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      {/* <header className="bg-[#ED1D24] text-white flex items-center px-4 py-2 h-[100px] relative top-[9px]">
        <div className="flex items-center justify-center w-[120px] h-[120px] bg-white rounded-full z-10 absolute left-[71px]">
          <img
            src={mainlog}
            alt="Indian Railway Logo"
            className="w-[100px] h-[100px] object-cover"
          />
        </div>
        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-[24px] md:text-[32px] font-roboto font-[700]">
            Indian Railway
          </h1>
        </div>
      </header> */}

      {/* Main Content */}
      <div className="flex flex-col md:flex-row mt-[2%]">
        {/* Sidebar */}
        <aside className="text-white bg-[#146696] md:w-[170px] min-w-max h-auto md:h-[883px] rounded-tr-[25px] mb-4 md:mb-0">
          {/* Content here */}
        </aside>
        <main className="flex flex-col flex-grow p-9">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 mb-4 md:mb-0">
              <h2 className="text-[24px] md:text-[30px] font-roboto font-[600]">
                Voice Data
              </h2>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium ${
                    view === "ALL"
                      ? "text-gray-900 bg-gray-200"
                      : "text-gray-900 bg-white"
                  } border border-gray-300 rounded-tl-md hover:bg-gray-300`}
                  onClick={() => setView("ALL")}
                >
                  ALL
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium ${
                    view === "Latest"
                      ? "text-gray-900 bg-gray-200"
                      : "text-gray-900 bg-white"
                  } border border-gray-200 rounded-tr-md hover:bg-gray-100`}
                  onClick={() => setView("Latest")}
                >
                  Latest
                </button>
              </div>
            </div>

            <Link to="/add-voice">
              <button className="bg-blue-600 text-white px-4 py-3 rounded-md w-full md:w-[159px] h-[44px] flex items-center justify-center space-x-2">
                <FaPlus />
                <span className="text-[12px] md:text-[14px] font-roboto leading-[20px] font-medium">
                  Add new voice
                </span>
              </button>
            </Link>
          </div>

          {/* Table ------------------------*/}
          <div className="overflow-x-auto">
            {view === "ALL" ? <All/> : <Latest data={latestData} />}
          </div>

 
          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <p className="text-[12px] sm:text-[14px] font-[500]">
              1 - 3 of 40 items
            </p>
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-900 me-2 border border-gray-300 rounded-l-md hover:bg-gray-300"
              >
                Previous
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-900 me-2 border border-gray-300 rounded-r-md hover:bg-gray-300"
              >
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
