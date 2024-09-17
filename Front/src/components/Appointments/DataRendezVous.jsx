/* eslint-disable react/prop-types */

const DataRendezVous = ({ dates, SelectedDate, handleDateSelect }) => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-center text-[#66BAAB]">
        Veuillez choisir la date du rendez-vous
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
        {dates.map((date, index) => (
          <button
            key={index}
            type="button"
            className={`px-4 py-2 rounded-lg border ${
              SelectedDate === date
                ? "bg-[#66BAAB] text-white border-blue-500"
                : "bg-gray-200 border-gray-300"
            } hover:bg-blue-400 hover:text-white transition-colors`}
            onClick={() => handleDateSelect(date)}
          >
            {date}
          </button>
        ))}
      </div>
    </>
  );
};

export default DataRendezVous;
