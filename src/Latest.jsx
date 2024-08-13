import React from 'react';
import { TbCloudDownload } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";


function Latest() {
  const data = [
    {
      id: 1,
      date: "2024-08-01",
      section: "North",
      trainNo: "12345",
      locNo: "67890",
      from: "Station A",
      to: "Station B",
      sNo: "1",
      lpNameId: "LP001",
      apNameId: "AP001",
      time: "10:00 AM",
      totalTime: "02:00 hrs",
    },
    {
      id: 2,
      date: "2024-08-02",
      section: "South",
      trainNo: "54321",
      locNo: "09876",
      from: "Station B",
      to: "Station C",
      sNo: "2",
      lpNameId: "LP002",
      apNameId: "AP002",
      time: "11:00 AM",
      totalTime: "03:10 hrs",
    },
    {
      id: 3,
      date: "2024-08-03",
      section: "West",
      trainNo: "67890",
      locNo: "12345",
      from: "Station C",
      to: "Station D",
      sNo: "3",
      lpNameId: "LP003",
      apNameId: "AP003",
      time: "12:00 AM",
      totalTime: "01:25 hrs",
    },
  ];

  if (!data || !Array.isArray(data)) {
    return <div>No data available</div>;
  }

// show latest data by date  ----------------------
  const latestEntry = data.reduce((latest, current) => {
    return new Date(current.date) > new Date(latest.date) ? current : latest;
  }, data[0]);

  return (
    <>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">Date</th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">Section</th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">Train No.</th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">LOC No.</th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">From</th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">To</th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">S. No.</th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">LP Name/ID</th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">AP Name/ID</th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">Time</th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">Total Time</th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">Transcription</th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[90px] sm:w-[146px] h-[40px] sm:h-[58px]">Results</th>
            </tr>
          </thead>
          <tbody>
            {/* the latest entry------------------ */}
            {latestEntry && (
              <tr className="text-center p-2 border rounded font-[700] font-roboto">
                <td className="border text-[12px] sm:text-[14px] w-[102px]">{latestEntry.date}</td>
                <td className="border text-[12px] sm:text-[14px]">{latestEntry.section}</td>
                <td className="border text-[12px] sm:text-[14px]">{latestEntry.trainNo}</td>
                <td className="border text-[12px] sm:text-[14px]">{latestEntry.locNo}</td>
                <td className="border text-[12px] sm:text-[14px]">{latestEntry.from}</td>
                <td className="border text-[12px] sm:text-[14px]">{latestEntry.to}</td>
                <td className="border text-[12px] sm:text-[14px]">{latestEntry.sNo}</td>
                <td className="border text-[12px] sm:text-[14px]">{latestEntry.lpNameId}</td>
                <td className="border text-[12px] sm:text-[14px]">{latestEntry.apNameId}</td>
                <td className="border text-[12px] sm:text-[14px]">{latestEntry.time}</td>
                <td className="border text-[12px] sm:text-[14px]">{latestEntry.totalTime}</td>
                <td className="cursor-pointer flex items-center text-[#2B67F6] w-[152px] h-[58px]">
                  <span className="text-[16px] mx-auto">DOWNLOAD</span>
                  <TbCloudDownload size={19} className="me-4" />
                </td>
                <td className="p-2 border text-blue-500">
                  <button className="h-[45px] w-[146px] rounded-[15px] bg-[#4AA1FF] text-[#ebebeb] font-normal cursor-pointer">Check Overview</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Latest;
