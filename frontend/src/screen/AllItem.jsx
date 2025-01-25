import { useEffect, useState } from "react";
import axios from "axios";

import AddItem from "../components/AddItem";
import UpdateFile from "../components/UpdateFile"; 

const AllItem = () => {
  const [Inventory, setInventory] = useState([]);
  const [ShowItem, setShowItem] = useState(false);
  const [UpdateShow, setUpdateShow] = useState(false); 
  const [selectedItem, setSelectedItem] = useState(null);
  const [error, setError] = useState(null);
  const [sortedCategory, setSortedCategory] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:5656/api/inventory")
      .then((response) => {
        setInventory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching inventory:", error);
        setError("Failed to load inventory. Please try again.");
      });
  }, []);

  const handleSort = (e) => {
    setSortedCategory(e.target.value);
  };

  const sortedInventory = Inventory.filter(item => item.category.includes(sortedCategory));

  return (
    <div className="container mx-auto px-2">
      <div className="flex justify-between items-center mb-4">
        <button className="p-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300" onClick={() => setShowItem(!ShowItem)}>
          Add Item
        </button>
        <input type="text" placeholder="Sort by category" className="p-2 border border-gray-300 rounded" value={sortedCategory} onChange={handleSort} />
      </div>

      {ShowItem && <AddItem setShowItem={setShowItem} />}

      {UpdateShow && <UpdateFile setUpdateShow={setUpdateShow} selectedItem={selectedItem} />}

      {error && <div className="text-red-500">{error}</div>}

      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal mt-2">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Category
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedInventory.map((item) => (
              <tr
                key={item._id}
                className={`border-b border-gray-200 ${
                  item.quantity < 10 ? "bg-red-100" : ""
                }`}
                onClick={() => {
                  setSelectedItem(item); 
                  setUpdateShow(true);
                }}
              >
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{item.name}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{item.category}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{item.quantity}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllItem;
