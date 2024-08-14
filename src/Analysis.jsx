import React, { useState, useEffect } from "react";
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import icon4 from "./assets/icon4.svg";
import icon5 from "./assets/icon5.svg";
import { Link,useNavigate } from "react-router-dom";
import ThreeLineGraph from "./ThreeLineGraph";
import { useDropzone } from "react-dropzone";
import homeicon from  "./assets/homeicon.svg"


const Analysis = () => {
  const [startProgress, setStartProgress] = useState(false);
  const [step, setStep] = useState(4) ; // Set initial step to "Human Extracted"
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
    if (startProgress) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const targetProgress = 100 / (steps.length - 1) * step;
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
      const newStep = step - 1;
      setStep(newStep);
      localStorage.setItem('step', newStep);
    }
  };

  const handleIconClick = (index) => {
    if (index <= step || progress === 100) {
      setStep(index); // Update the step to the index of the clicked icon
      navigate(steps[index].route); // Navigate to the corresponding route
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
              onClick={() => handleIconClick(index)}
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


        {/* Graph Section */}
        <div className="graph-container w-[1000px] h-[100vh]   ms-3  ">
          <ThreeLineGraph />
          <div className=" pt-3 flex flex-col items-center bg-[#FbFFF1]  pb-3">
            <h3 className="font-bold text-lg">Analysis Details</h3>
            <div className="font-semibold mt-2">
              <ul className="flex space-x-4 text-sm">
                <li>Date: <span className="font-normal">2024-08-01</span></li>
                <li>Train No: <span  className="font-normal"> 1234</span></li>
                <li>Section: <span  className="font-normal">Nort</span></li>
                <li>From <span  className="font-normal"> Station A</span></li>
                <li>To: <span  className="font-normal">Station B</span></li>
                <li>Total Time: <span  className="font-normal">02:00 hrs</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analysis;
