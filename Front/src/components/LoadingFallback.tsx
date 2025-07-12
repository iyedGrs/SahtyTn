import React from "react";

interface LoadingFallbackProps {
  message?: string;
  showSpinner?: boolean;
  fullScreen?: boolean;
}

const LoadingFallback: React.FC<LoadingFallbackProps> = ({
  message = "Loading...",
  showSpinner = true,
  fullScreen = true,
}) => {
  const containerClasses = fullScreen
    ? "fixed inset-0 bg-white flex items-center justify-center z-50"
    : "flex items-center justify-center p-8";

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center space-y-4">
        {showSpinner && (
          <div className="relative">
            {/* Spinning circle */}
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

            {/* Optional: SahtyTN logo in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-600 rounded-full opacity-20"></div>
            </div>
          </div>
        )}

        <div className="text-center">
          <p className="text-lg font-medium text-gray-700">{message}</p>
          <p className="text-sm text-gray-500 mt-1">Please wait a moment...</p>
        </div>

        {/* Progress dots animation */}
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingFallback;
