/* eslint-disable react/prop-types */
const TimeRendezVous = ({ selectedTime, handleTimeSelect, times }) => {
  return (
    <>
      {console.log("selected time : ", selectedTime)}
      <h2 className="text-xl font-bold mb-4 text-center text-[#66BAAB]">
        Veuillez choisir lheure du rendez-vous
      </h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {times.map((time, index) => (
          <button
            key={index}
            type="button"
            className={`px-4 py-2 rounded-lg border ${
              selectedTime === time
                ? "bg-[#66BAAB] text-white border-blue-500"
                : "bg-gray-200 border-gray-300"
            } hover:bg-blue-400 hover:text-white transition-colors`}
            onClick={() => handleTimeSelect(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </>
  );
};

export default TimeRendezVous;
