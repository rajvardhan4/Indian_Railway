import React from "react";
import { TbCloudDownload } from "react-icons/tb";
import overview from "./assets/Vector.png";
import { Link , useNavigate} from "react-router-dom";
function All() {
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
  
  console.log('Data received in All component:', data);
  
  return (
    <>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">
                Date
              </th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">
                Section
              </th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">
                Train No.
              </th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">
                LOC No.
              </th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">
                From
              </th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">
                To
              </th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">
                S. No.
              </th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">
                LP Name/ID
              </th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">
                AP Name/ID
              </th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">
                Time
              </th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px]">
                Total Time
              </th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[90px] sm:w-[146px] h-[40px] sm:h-[58px]">
                Transcription
              </th>
              <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[90px] sm:w-[146px] h-[40px] sm:h-[58px]">
                Results
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="text-center p-2 border rounded font-[700] font-roboto">
                <td className="border text-[12px] sm:text-[14px] w-[102px]">{item.date}</td>
                <td className="border text-[12px] sm:text-[14px]">{item.section}</td>
                <td className="border text-[12px] sm:text-[14px]">{item.trainNo}</td>
                <td className="border text-[12px] sm:text-[14px]">{item.locNo}</td>
                <td className="border text-[12px] sm:text-[14px]">{item.from}</td>
                <td className="border text-[12px] sm:text-[14px]">{item.to}</td>
                <td className="border text-[12px] sm:text-[14px]">{item.sNo}</td>
                <td className="border text-[12px] sm:text-[14px]">{item.lpNameId}</td>
                <td className="border text-[12px] sm:text-[14px]">{item.apNameId}</td>
                <td className="border text-[12px] sm:text-[14px]">{item.time}</td>
                <td className="border text-[12px] sm:text-[14px]">{item.totalTime}</td>
                <td className="cursor-pointer flex items-center text-[#2B67F6] w-[152px] h-[58px]">
                  <span className="text-[16px] mx-auto">DOWNLOAD</span>
                  <TbCloudDownload size={19} className="me-4" />
                </td>
                <td className="p-2 border text-blue-500">
                  <Link to="/add-voice">
                  <button className="h-[45px] w-[146px] rounded-[15px] bg-[#4AA1FF] text-[#ebebeb] font-normal cursor-pointer flex items-center justify-center space-x-2">
                    <span>Check Overview</span>
                    <img src={overview} alt="overview" className="h-[16px]" />
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default All;
