import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import icon4 from "./assets/icon4.svg";
import icon5 from "./assets/icon5.svg";
import { Link, useNavigate } from "react-router-dom";
import homeicon from  "./assets/homeicon.svg"

function AddVoice() {
  const [files, setFiles] = useState([]);
  const [startProgress, setStartProgress] = useState(false);
  const [step, setStep] = useState(0); // Set initial step to "Human Extracted"
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
        <img src={icon2} alt="Human" className="icon-image h-[100%] w-[100%]" />
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
      <div className="main-can flex flex-col justify-center items-center min-h-screen bg-[#FbFFF1] p-4 font-roboto">
      
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


        {/* Form Section */}
        <div className="c shadow-md w-full max-w-4xl rounded-[20px] border-2 border-[#4B4B4B] p-6 bg-[#fffefe] z-10" style={{ marginBottom: '0' }}>
          <div className="w-full max-w-2xl mx-auto ">
            <h1 className="text-[24px] sm:text-[32px] font-roboto font-bold text-center mb-4">
              Audio Analysis Report Form
            </h1>

            <div
              {...getRootProps()}
              className={`border-2 border-dashed h-[120px] sm:h-[120px] rounded-lg p-3 bg-[#EDF8FF] ${
                isDragActive ? "border-blue-500" : "border-gray-300"
              }`}
            >
              <input {...getInputProps()} />
              <p className="text-center text-gray-600 font-semibold">
                {isDragActive ? (
                  "Drop the files here ..."
                ) : (
                  <>
                    Drag & drop files to upload <br /> or <br />
                    <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-lg">
                      Browse Files
                    </button>
                  </>
                )}
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                {/* Form Fields */}
                <div>
                  <label className="block text-sm text-gray-700 font-semibold">
                    Section:
                  </label>
                  <select
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    defaultValue="black"
                  >
                    <option value="select">Selected</option>
                    <option value="east">East</option>
                    <option value="west">West</option>
                    <option value="south">South</option>
                    <option value="north">north</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 font-semibold">
                    Date:
                  </label>
                  <input
                    type="date"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 font-semibold">
                    Train No:
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 font-semibold">
                    Loco No:
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 font-semibold">
                    From:
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 font-semibold">
                    To:
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 font-semibold">
                    LP Name/ID:
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 font-semibold">
                    Video/Audio:
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <Link to="/Human">
                <button
                  type="submit"
                  className="w-full mt-5 px-4 py-2 bg-[#3385f9] text-white rounded-lg hover:bg-[#5798f3]"
                >
                  Upload start
                </button>
              </Link>
            </form>

            {files.length > 0 && (
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Uploaded Files:
                </h2>
                <ul className="list-disc list-inside">
                  {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>


      </div>
    </>
  );
}

export default AddVoice;

