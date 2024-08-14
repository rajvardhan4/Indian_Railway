import React, { useState, useEffect } from "react";
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import icon4 from "./assets/icon4.svg";
import icon5 from "./assets/icon5.svg";
import { Link, useNavigate } from "react-router-dom";
import { TbCloudDownload } from "react-icons/tb";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import homeicon from  "./assets/homeicon.svg"



const Transcription = () => {
  const [startProgress, setStartProgress] = useState(false);
  const [step, setStep] = useState(3); // Set initial step to "Human Extracted"
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleCheck = (index) => {
    setCheckedIndex(index);
  };



  const steps = [
    {
      label: "Upload Audio",
      icon: (
        <img
          src={icon1}
          alt="Upload Audio"
          className="icon-image h-[70%] w-[70%] bg-white ms-1"
        />
      ),
      route: "/add-voice", // Route for "Upload Audio"
    },
    {
      label: "Human Extracted",
      icon: (
        <img src={icon2} alt="Human" className="icon-image h-[100%] w-[100%] " />
      ),
      route: "/Human", // Route for "Human Extracted"
    },
    {
      label: "Denoise",
      icon: (
        <img
          src={icon3}
          alt="Denoise"
          className="icon-image h-[90%] w-[90%]"
        />
      ),
      route: "/denoise", // Route for "Denoise"
    },
    {
      label: "Transcription",
      icon: (
        <img
          src={icon4}
          alt="Transcription"
          className="icon-image h-[70%] w-[70%]"
        />
      ),
      route: "/transcription", // Route for "Transcription"
    },
    {
      label: "Analysis",
      icon: (
        <img
          src={icon5}
          alt="Analysis"
          className="icon-image h-[70%] w-[70%]"
        />
      ),
      route: "/analysis", // Route for "Analysis"
    },
  ];





  useEffect(() => {
    if (startProgress && step < steps.length - 1) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const targetProgress = (100 / (steps.length - 1)) * step;
          if (prevProgress < targetProgress) {
            return prevProgress + 1;
          } else {
            clearInterval(interval);
            return targetProgress;
          }
        });
      }, 100);
  
      return () => clearInterval(interval);
    }
  }, [startProgress, step]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setStartProgress(true);
    nextStep();
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleIconClick = (route) => {
    if (step < steps.length - 1) {
      setStartProgress(true);
      navigate(route);
    }
  };

  const progressWidth = (step / (steps.length - 1)) * 100; 
 

  return (
    <>
      <div className="main-can flex flex-col  items-center min-h-screen bg-[#FbFFF1] p-4 font-roboto">
    {/* home btn */}
    <div className="flex w-[100%] justify-end">
  <div className="flex justify-evenly w-[182px] h-[44px] bg-[#FFE9BE] rounded-sm home-btn font-roboto font-medium">
    <Link to="/">
      <button className="text-[21px] p-1 flex justify-evenly mt-1">
      <img src={homeicon} alt="homeicon" className="w-[25px]" />
        <span className="ms-3">Back To Home</span>
      </button>
    </Link>
  </div>
</div>
      <div id="container" className="container">
      <div className="progress-bar">
        <ul className="progress">
          {steps.map((stepItem, index) => (
            <li
              key={index}
              className={`step ${index <= step ? "active" : ""}`}
              onClick={() => handleIconClick(stepItem.route)}
            >
              <div className="top-text">
                <div className={`label ${index === step ? "bg-yellow" : ""}`}>
                  {stepItem.label}
                </div>
              </div>

              <div className="icon-container">
                <div className={`icon ${index <= step ? "active" : ""}`}>
                  {stepItem.icon}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="bar">
          <div className="fill" style={{ width: `${progressWidth}%` }}>
            <div className="progress-value">
              {Math.round(progressWidth)}%
            </div>
          </div>
        </div>
      </div>
    </div>


        <div className="border border-gray-300 rounded-lg shadow-md p-4  mx-auto  bg-[#fffefe]">
          {/* Table */}
          <table className="w-full text-left border-collapse ">
            <thead >
              <tr className="bg-[#4B4B4B] text-white">
                <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px] text-center">
                  Date
                </th>
                <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px] text-center">
                  Section
                </th>
                <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px] text-center">
                  Train No.
                </th>
                <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px] text-center">
                  LOC No.
                </th>
                <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px] text-center">
                  From
                </th>
                <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px] text-center">
                  To
                </th>
                <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px] text-center">
                  S. No.
                </th>
                <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px] text-center">
                  LP Name/ID
                </th>
                <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px] text-center">
                  AP Name/ID
                </th>
                <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px] text-center">
                  Time
                </th>
                <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px] text-center">
                  Total Time
                </th>
                <th className="p-2 border rounded bg-[#4B4B4B] font-[700] font-roboto w-[60px] sm:w-[82px] h-[40px] sm:h-[58px] text-center">
                  Transcription
                </th>
              </tr>
            </thead>
            <tbody>
              <tr  className="bg-white">
                <td className="px-4 py-2 border font-roboto font-medium text-center w-[119px]">2024-08-01</td>
                <td className="px-4 py-2 border font-roboto font-medium text-center w-[119px]">North</td>
                <td className="px-4 py-2 border font-roboto font-medium text-center w-[119px]">12345</td>
                <td className="px-4 py-2 border font-roboto font-medium text-center w-[119px]">67890</td>
                <td className="px-4 py-2 border font-roboto font-medium text-center w-[119px]">Station A</td>
                <td className="px-4 py-2 border font-roboto font-medium text-center w-[119px]">Station B</td>
                <td className="px-4 py-2 border font-roboto font-medium text-center w-[119px]">1</td>
                <td className="px-4 py-2 border font-roboto font-medium text-center w-[119px]">LP001</td>
                <td className="px-4 py-2 border font-roboto font-medium text-center w-[119px]">AP001</td>
                <td className="px-4 py-2 border font-roboto font-medium text-center w-[119px]">10:00 AM</td>
                <td className="px-4 py-2 border font-roboto font-medium text-center w-[119px]">02:00 hrs</td>
                <td className="px-4 py-2 border font-roboto font-medium text-center text-green-500">
                  Successfully Done
                </td>
              </tr>
            </tbody>
          </table>

          {/* Audio Transcription */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Audio Transcription:</h2>
            <div className="space-y-2">
              <p>
                <span className="text-blue-600">[00:00 - 00:10]:</span> "This is
                a message for all passengers. The 09:30 express train to Mumbai
                is now arriving at platform 3."
              </p>
              <p>
                <span className="text-blue-600">[00:11 - 00:22]:</span> "Please
                ensure you have all your belongings with you before boarding.
                The train will depart on schedule at 09:45."
              </p>
              <p>
                <span className="text-blue-600">[00:23 - 00:35]:</span>{" "}
                "Passengers are reminded to maintain social distancing while
                waiting on the platform and to wear face masks at all times."
              </p>
              <p>
                <span className="text-blue-600">[00:36 - 00:48]:</span> "If you
                require assistance, please approach the station staff at the
                information desk near the main entrance."
              </p>
              <p>
                <span className="text-blue-600">[00:49 - 01:00]:</span> "Thank
                you for your cooperation, and we wish you a safe and pleasant
                journey."
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex justify-center items-center font-roboto ">
            <div className="flex ">
              <p className=" text-black font-normal py-2 px-4 border-2 border-[#c4c4c4]  h-[44px]">
                Denoise Voice
              </p>
              <button className="cursor-pointer bg-[#0070FF] flex items-center  h-[44px] text-[#ffffff] w-[152px]">
                <span className="text-[16px] mx-auto">DOWNLOAD</span>
                <TbCloudDownload size={19} className="me-4" />
              </button>
            </div>
            <div className="ml-auto ">
              <Link to="/Analysis">
                <button className=" gap-3 h-[44px] flex   bg-orange-500 hover:bg-orange-600 text-white font-roboto py-2 px-4 ">
                  <span className="mt-1"> Transcription</span>{" "}
                  <FaRegArrowAltCircleRight size={20} className="mt-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transcription;
