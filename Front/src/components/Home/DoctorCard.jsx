/* eslint-disable react/prop-types */
const DoctorCard = ({ image, name, title }) => {
  return (
    <div className="bg-white rounded-xl h-[500px] shadow-lg ">
      <div className="w-full rounded-xl h-4/5 bg-gray-100 overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="rounded-t-lg h-full object-cover"
        />
      </div>
      <div className="p-4 text-center flex items-center justify-center flex-col ">
        <h3 className="text-lg md:text-xl font-semibold text-black">{name}</h3>
        <p className="text-gray-300 text-sm md:text-base">{title}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
