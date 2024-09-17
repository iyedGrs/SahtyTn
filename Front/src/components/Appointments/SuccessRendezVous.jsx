/* eslint-disable react/prop-types */

const SuccessRendezVous = ({ selectedDate, selectedTime, phoneNumber }) => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold text-green-500 mb-4">Succès</h2>
      <p className="mb-4">Votre rendez-vous est confirmé!</p>
      <div className="bg-blue-100 p-4 rounded-lg text-left">
        <p>
          <strong>Date:</strong> {selectedDate}
        </p>
        <p>
          <strong>Time:</strong> {selectedTime}
        </p>
        <p>
          <strong>Phone:</strong> {phoneNumber}
        </p>
      </div>
    </div>
  );
};

export default SuccessRendezVous;
