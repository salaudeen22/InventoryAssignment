const DashBoard = () => {
  return (
    <div className="px-2 py-2 h-screen w-full bg-gray-100">
      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
          <div className="box p-6 border-2 border-gray-200 rounded-lg shadow-md w-full">
            <h4 className="text-xl font-semibold text-gray-700">Total Items</h4>
            <span className="text-2xl font-bold text-gray-900">10</span>
          </div>
          <div className="box p-4 border-2 border-gray-200 rounded-lg shadow-md w-full">
            <h4 className="text-xl font-semibold text-gray-700">
              Total Categories
            </h4>
            <span className="text-2xl font-bold text-gray-900">5</span>
          </div>
          <div className="box p-4 border-2 border-gray-200 rounded-lg shadow-md w-full">
            <h4 className="text-xl font-semibold text-gray-700">
              Average Quantity per Item
            </h4>
            <span className="text-2xl font-bold text-gray-900">3</span>
          </div>

          <div className="box p-4 border-2 border-gray-200 rounded-lg shadow-md w-full">
            <h4 className="text-xl font-semibold text-gray-700">
              Total Value of Inventory
            </h4>
            <span className="text-2xl font-bold text-gray-900">20</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
