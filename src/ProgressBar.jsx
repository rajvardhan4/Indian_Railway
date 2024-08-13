// import React from 'react';

// const ProgressBar = () => {
 

//   return (
//     <>

//     </>
//   );
// };

// export default ProgressBar;

import React, { useState } from 'react';
import './WebDesignProcess.css'; // Make sure to include your CSS styles

const WebDesignProcess = () => {
  const [completedSteps, setCompletedSteps] = useState(0);

  const handleStepClick = (stepNumber) => {
    if (stepNumber > completedSteps) {
      setCompletedSteps(stepNumber);
    }
  };

  return (
    <div className="cont">
      <h1 className="text-center">WEB DESIGN PROCESS</h1>
      <progress
        id="nprogress-bar"
        value={completedSteps * 34}
        max="100"
      ></progress>
      <div id="step">
        <span
          className={`first ${completedSteps >= 1 ? 'border-change' : ''}`}
          onClick={() => handleStepClick(1)}
        >
          <i className="fa fa-flask"></i>
        </span>
        <span
          className={`second ${completedSteps >= 2 ? 'border-change' : ''}`}
          onClick={() => handleStepClick(2)}
        >
          <i className="fa fa-paint-brush"></i>
        </span>
        <span
          className={`third ${completedSteps >= 3 ? 'border-change' : ''}`}
          onClick={() => handleStepClick(3)}
        >
          <i className="fa fa-code"></i>
        </span>
        <span
          className={`fourth ${completedSteps >= 4 ? 'border-change' : ''}`}
          onClick={() => handleStepClick(4)}
        >
          <i className="fa fa-rocket"></i>
        </span>
      </div>

      <div className="row">
        {completedSteps === 1 && (
          <div id="first">
            <h2>Plan & Research</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        )}
        {completedSteps === 2 && (
          <div id="second">
            <h2>Design</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
        )}
        {completedSteps === 3 && (
          <div id="third">
            <h2>Development</h2>
            <p>
              Nullam porttitor pretium dolor vitae ullamcorper. Suspendisse
              blandit ipsum et condimentum efficitur.
            </p>
          </div>
        )}
        {completedSteps === 4 && (
          <div id="fourth">
            <h2>Launch</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebDesignProcess;
