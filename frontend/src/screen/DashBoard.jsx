import React, { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../base_url";

const DashBoard = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [averageQuantity, setAverageQuantity] = useState(0);
  const [lowStockItems, setLowStockItems] = useState([]);

  useEffect(() => {
    // Fetch the data from your API
    axios
      .get(`${base_url}api/inventory`)
      .then((response) => {
        const items = response.data;
        setTotalItems(items.length);

        const categories = new Set(items.map((item) => item.category));
        setTotalCategories(categories.size);

        const totalQuantity = items.reduce(
          (acc, item) => acc + item.quantity,
          0
        );
        setAverageQuantity((totalQuantity / items.length).toFixed(2));

        // Check for low stock items
        const lowStockItems = items.filter(item => item.quantity < 10);
        setLowStockItems(lowStockItems);
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
      });
  }, []);

  return (
    <div className="px-2 py-2 h-screen w-full bg-gray-100">
      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
          <div className="box p-6 border-2 border-gray-200 rounded-lg shadow-md w-full">
            <h4 className="text-xl font-semibold text-gray-700">Total Items</h4>
            <span className="text-2xl font-bold text-gray-900">{totalItems}</span>
          </div>
          <div className="box p-4 border-2 border-gray-200 rounded-lg shadow-md w-full">
            <h4 className="text-xl font-semibold text-gray-700">
              Total Categories
            </h4>
            <span className="text-2xl font-bold text-gray-900">{totalCategories}</span>
          </div>
          <div className="box p-4 border-2 border-gray-200 rounded-lg shadow-md w-full">
            <h4 className="text-xl font-semibold text-gray-700">
              Average Quantity per Item
            </h4>
            <span className="text-2xl font-bold text-gray-900">{averageQuantity}</span>
          </div>

          <div className="box p-4 border-2 border-gray-200 rounded-lg shadow-md w-full">
            <h4 className="text-xl font-semibold text-gray-700">
              Low Stock Warning
            </h4>
            {lowStockItems.length > 0 ? (
              <ul>
                {lowStockItems.map((item) => (
                  <li key={item._id} className="text-lg font-bold text-gray-900">
                    {item.name} - Quantity: {item.quantity}
                  </li>
                ))}
              </ul>
            ) : (
              <span className="text-2xl font-bold text-gray-900">No Low Stock</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
