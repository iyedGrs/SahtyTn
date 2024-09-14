import { useForm } from "react-hook-form";
import gouvernorats from "../../data/gover";

const FilterDoc = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <div className="m-4 max-w-screen-xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-xl border border-gray-300 bg-white p-6 shadow-lg space-y-6"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Name Input */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-stone-600 text-sm font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              placeholder="Enter Name"
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm outline-none focus:border-[#66BAAB] focus:ring-[#66BAAB] focus:ring-opacity-50"
            />
          </div>

          {/* Speciality Dropdown */}
          <div className="flex flex-col">
            <label
              htmlFor="speciality"
              className="text-stone-600 text-sm font-medium"
            >
              Speciality
            </label>
            <select
              id="speciality"
              {...register("speciality")}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm outline-none focus:border-[#66BAAB] focus:ring-[#66BAAB] focus:ring-opacity-50"
            >
              <option value="" hidden>
                Select a speciality
              </option>
              <option value="Cardiologie">Cardiologie</option>
              <option value="Dentiste">Dentiste</option>
              <option value="Généraliste">Généraliste</option>
              <option value="Gynécologie">Gynécologie</option>
              <option value="Ophtalmologie">Ophtalmologie</option>
              <option value="Pédiatrie">Pédiatrie</option>
              <option value="Psychiatrie">Psychiatrie</option>
              <option value="Radiologie">Radiologie</option>
              <option value="Urologie">Urologie</option>
            </select>
          </div>

          {/* Gender Dropdown */}
          <div className="flex flex-col">
            <label
              htmlFor="gender"
              className="text-stone-600 text-sm font-medium"
            >
              Gender
            </label>
            <select
              id="gender"
              {...register("gender")}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm outline-none focus:border-[#66BAAB] focus:ring-[#66BAAB] focus:ring-opacity-50"
            >
              <option value="" hidden>
                Select gender
              </option>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
          </div>

          {/* Distance Dropdown */}
          <div className="flex flex-col">
            <label
              htmlFor="distance"
              className="text-stone-600 text-sm font-medium"
            >
              Distance
            </label>
            <select
              id="distance"
              {...register("distance")}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm outline-none focus:border-[#66BAAB] focus:ring-[#66BAAB] focus:ring-opacity-50"
            >
              <option value="" hidden>
                Select a distance
              </option>
              <option value="moins que 2km">Moins que 2km</option>
              <option value="moins que 10km">Moins que 10km</option>
              <option value="plus que 15km">Plus que 15km</option>
            </select>
          </div>

          {/* Gouvernorats Dropdown */}
          <div className="flex flex-col">
            <label
              htmlFor="gouvernorat"
              className="text-stone-600 text-sm font-medium"
            >
              Gouvernorat
            </label>
            <select
              id="gouvernorat"
              {...register("gouvernorat")}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm outline-none focus:border-[#66BAAB] focus:ring-[#66BAAB] focus:ring-opacity-50"
            >
              <option value="" hidden>
                Select a gouvernorat
              </option>
              {gouvernorats.map((gouvernorat, index) => (
                <option key={index} value={gouvernorat.nom}>
                  {gouvernorat.nom}
                </option>
              ))}
            </select>
          </div>

          {/* CNAM Checkbox */}
          <div className="flex items-center mt-6 justify-between space-x-4 p-4 bg-gray-100 rounded-lg">
            <label
              htmlFor="cnam"
              className="text-stone-600 text-sm font-medium"
            >
              Conventionné avec la CNAM
            </label>
            <input
              type="checkbox"
              id="cnam"
              {...register("cnam")}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
          </div>

          {/* Home Visit Checkbox */}
          <div className="flex items-center lg:mt-6 justify-between space-x-4 p-4 bg-gray-100 rounded-lg">
            <label
              htmlFor="homeVisit"
              className="text-stone-600 text-sm font-medium"
            >
              Visite à domicile
            </label>
            <input
              type="checkbox"
              id="homeVisit"
              {...register("homeVisit")}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Form Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg bg-gray-200 px-6 py-2 font-medium text-gray-600 hover:bg-gray-300 active:scale-95 transition duration-200"
          >
            Reset
          </button>
          <button
            type="submit"
            className="rounded-lg bg-[#66BAAB] px-6 py-2 font-medium text-white hover:bg-[#5aa596] active:scale-95 transition duration-200"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterDoc;
