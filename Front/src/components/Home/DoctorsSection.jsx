import DoctorCard from "./DoctorCard";
import { doctors } from "../../data/doctors js";

export default function DoctorsSection() {
  return (
    <section className="bg-[#39AD96] font-Nunito h-full py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-white text-4xl font-bold mb-6 ">OUR DOCTORS</h2>
        <p className="text-white px-12 md:px-0 max-w-2xl mx-auto mb-12">
          Incilint sapiente illo quo praesentium officiis laudantium nostrum, ad
          adipisci cupiditate sit, quisquam aliquid. Officiis laudantium fuga ad
          voluptas aspernatur error fugiat quos facilis saepe quas fugit, beatae
          id quisquam.
        </p>
        <div
          className="grid gap-8 lg:px-36 md:px-0 px-14 md:grid-cols-3  
        "
        >
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              image={doctor.image}
              name={doctor.name}
              title={doctor.title}
            />
          ))}
        </div>
        <button className="mt-8 px-6 py-3 bg-white text-[#39AD96] rounded-lg">
          View All
        </button>
      </div>
    </section>
  );
}
