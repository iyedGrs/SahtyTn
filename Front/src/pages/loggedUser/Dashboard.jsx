import PatientChart from "../../components/PatientChart";
import UpperCard from "../../components/UpperCard";

const Dashboard = () => {
  return (
    <div className="grid gap-4 lg:grid-rows-4">
      {/* Cards Container */}
      <div className="grid grid-cols-1  px-4 pt-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full  ">
        {/* Card 1 */}
        <UpperCard />

        {/* Card 2 */}
        <UpperCard />

        {/* Card 3 */}
        <UpperCard />

        {/* Card 4 */}
        <UpperCard />
      </div>

      {/* Other sections */}
      <div className="flex items-start border-2 justify-center  ">
        <div className=" ">
          <PatientChart />
        </div>
        <div className="">
          <PatientChart />
        </div>
      </div>
      <div className="flex items-start border-2 justify-center  ">
        <div className=" ">
          <PatientChart />
        </div>
        <div className="">
          <PatientChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
