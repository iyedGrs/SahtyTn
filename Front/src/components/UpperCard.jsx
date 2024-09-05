import NotificationsIcon from "@mui/icons-material/Notifications";

const UpperCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500">TODAYS MONEY</p>
          <h2 className="text-3xl text-black font-bold">$53,000</h2>
          <p className="text-green-500 mt-2">+55% since yesterday</p>
        </div>
        <div className="bg-purple-500 p-3 rounded-full">
          <NotificationsIcon className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default UpperCard;
