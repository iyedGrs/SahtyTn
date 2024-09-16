/* eslint-disable react/prop-types */
// import { useState } from "react";

const StepProgressBar = ({ currentStep }) => {
  // Step names
  const steps = ["Date/Heure", "Vérification", "Confirmation", "Succès"];

  return (
    <div className="w-full px-8 py-4 max-w-screen-lg mx-auto">
      {/* Progress Line */}
      <div className="relative flex items-center justify-between">
        {/* Full Progress Bar */}
        <div className="absolute top-1/2 left-0 right-0 h-3 bg-gray-300 rounded-full" />
        {/* Progress up to current step */}
        <div
          className="absolute top-1/2 left-0 h-3 bg-yellow-500 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center"
          >
            {/* Step Circle */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full border-2 mb-6
              ${
                index <= currentStep
                  ? "bg-yellow-500 border-yellow-500"
                  : "bg-gray-300 border-gray-300"
              }
              transition-all duration-500 ease-in-out shadow-lg
              `}
            >
              {index < currentStep ? (
                <span className="text-white text-lg font-bold">✔</span>
              ) : index === currentStep ? (
                <span className="text-white text-lg font-bold">
                  {index + 1}
                </span>
              ) : (
                <span className="text-black text-lg font-bold">
                  {index + 1}
                </span>
              )}
            </div>
            {/* Step Label */}
            <span className="text-md font-semibold mt-2 text-gray-700">
              {step}
            </span>
          </div>
        ))}
      </div>

      {/* Buttons to change the steps (for demonstration purposes) */}
      {/* <div className="flex justify-between mt-8">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
          }
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default StepProgressBar;
