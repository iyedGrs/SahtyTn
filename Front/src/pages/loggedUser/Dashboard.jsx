import BarChart from "../../components/BarChart";
import PatientChart from "../../components/PatientChart";
import UpperCard from "../../components/UpperCard";
import TableDashboard from "../../components/TableDashboard";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Cards Container */}
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {/* Card 1 */}
        <UpperCard />
        <UpperCard />
        <UpperCard />
        <UpperCard />
      </div>

      {/* Other sections */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-2">
        <PatientChart />
        <BarChart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-2">
        <TableDashboard />
      </div>

      <div className="flex items-start border-2 flex-wrap justify-center gap-4"></div>
    </div>
  );
};

export default Dashboard;
