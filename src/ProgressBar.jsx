import React, { useState } from 'react';

const ProgressBar = () => {
  const [step, setStep] = useState('step1');

  const next = () => {
    if (step === 'step1') {
      setStep('step2');
    } else if (step === 'step2') {
      setStep('step3');
    } else if (step === 'step3') {
      setStep('step4');
    } else if (step === 'step4') {
      setStep('complete');
    }
  };

  const getStepClasses = (currentStep) => {
    let classes = 'flex items-center justify-center w-9 h-9 rounded-full border-2 border-green-700 text-white font-bold';
    if (step === currentStep) {
      classes += ' bg-green-700 animate-pulse';
    } else if (step === 'complete' && currentStep !== 'complete') {
      classes += ' bg-gray-300 border-gray-300 text-gray-500';
    } else {
      classes += ' bg-green-700 border-green-700';
    }
    return classes;
  };

  const getBarClasses = (currentStep) => {
    return `absolute inset-0 bg-green-700 transition-transform duration-500 ${step === currentStep ? 'translate-x-full' : 'translate-x-0'}`;
  };

  return (
    <div className="container mx-auto my-8">
      <ul className="flex justify-between items-center">
        <li className={`relative flex-1 text-center ${getStepClasses('step1')}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`progress-bar ${getBarClasses('step1')}`}></div>
          </div>
          Start
        </li>
        <li className={`relative flex-1 text-center ${getStepClasses('step2')}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`progress-bar ${getBarClasses('step2')}`}></div>
          </div>
          First Step
        </li>
        <li className={`relative flex-1 text-center ${getStepClasses('step3')}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`progress-bar ${getBarClasses('step3')}`}></div>
          </div>
          Middle Stage
        </li>
        <li className={`relative flex-1 text-center ${getStepClasses('step4')}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`progress-bar ${getBarClasses('step4')}`}></div>
          </div>
          Finish
        </li>
      </ul>
      <button onClick={next} className="mt-4 px-4 py-2 bg-green-700 text-white font-bold rounded">
        Next Step
      </button>
    </div>
  );
};

export default ProgressBar;
