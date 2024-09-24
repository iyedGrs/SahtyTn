const UpperFormPart = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-5">
      <div className="bg-[#5c99df] p-2 rounded-t-lg flex space-x-2">
        <div className="bg-gray-300 py-2 px-4 rounded-lg">
          <img
            src="../../../doctorIcon.png"
            height={40}
            width={60}
            alt="Doctor Icon"
          />
        </div>
        <div className="text-white">
          <p>Mohamed Grissa</p>
          <p>Doctor</p>
          <p>
            <span className="material-symbols-outlined text-sm">
              location_on
            </span>{" "}
            Sousse, Tunisie
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpperFormPart;
