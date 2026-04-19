import React from "react";

interface StepProgressBarProps {
  currentStep: number;
}

const StepProgressBar: React.FC<StepProgressBarProps> = ({ currentStep }) => {
  const steps = ["Date & Heure", "Vérification", "Succès"];

  // Normalize step (1-based to 0-based for array indexing)
  const normalizedStep = currentStep - 1;

  return (
    <div className="w-full px-8 py-8 max-w-screen-lg mx-auto">
      {/* Progress Line */}
      <div className="relative flex items-center justify-between z-0">
        {/* Full Progress Bar */}
        <div className="absolute top-1/2 left-0 w-full h-[4px] bg-gray-200 -z-10 rounded-full" />
        {/* Active Progress Bar */}
        <div
          className="absolute top-1/2 left-0 h-[4px] bg-[#66BAAB] -z-10 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${(normalizedStep / (steps.length - 1)) * 100}%` }}
        />
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-1 z-10"
          >
            {/* Step Circle */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg mb-3 shadow-md transition-all duration-500 ease-in-out
              ${
                index < normalizedStep
                  ? "bg-[#66BAAB] text-white ring-4 ring-[#66BAAB]/30"
                  : index === normalizedStep
                  ? "bg-white text-[#66BAAB] border-[3px] border-[#66BAAB] ring-4 ring-[#66BAAB]/20"
                  : "bg-white border-[3px] border-gray-200 text-gray-400"
              }
              `}
            >
              {index < normalizedStep ? (
                <span className="material-symbols-outlined font-bold text-xl">check</span>
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            {/* Step Label */}
            <span
              className={`text-sm font-semibold tracking-wide transition-colors duration-500 ${
                index <= normalizedStep ? "text-gray-800" : "text-gray-400"
              }`}
            >
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
