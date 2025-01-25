import { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../base_url";
import AddItem from "../components/AddItem";
import UpdateFile from "../components/UpdateFile"; 

const AllItem = () => {
  const [Inventory, setInventory] = useState([]);
  const [ShowItem, setShowItem] = useState(false);
  const [UpdateShow, setUpdateShow] = useState(false); 
  const [selectedItem, setSelectedItem] = useState(null);
  const [error, setError] = useState(null);
  const [sortedCategory, setSortedCategory] = useState('');
  const [sortQuantity, setSortQuantity] = useState(''); // Added to handle quantity sorting
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get(`${base_url}api/inventory`)
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

  const handleQuantitySort = (e) => {
    setSortQuantity(e.target.value);
  };

  const sortedInventory = Inventory.filter(item => item.category.includes(sortedCategory))
    .sort((a, b) => {
      if (sortQuantity === 'asc') {
        return a.quantity - b.quantity;
      } else if (sortQuantity === 'desc') {
        return b.quantity - a.quantity;
      }
      return 0;
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedInventory.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-2">
      <div className="flex flex-col justify-center items-center mb-4 md:flex-row md:justify-between">
        <button className="p-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 mb-4 md:mb-0" onClick={() => setShowItem(!ShowItem)}>
          Add Item
        </button>
        <div className="flex flex-col md:flex-row">
          <input type="text" placeholder="Sort by category" className="p-2 border border-gray-300 rounded mb-4 md:mb-0 md:mr-4" value={sortedCategory} onChange={handleSort} />
          <select value={sortQuantity} onChange={handleQuantitySort} className="p-2 border border-gray-300 rounded">
            <option value="">Sort by Quantity</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
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
            {currentItems.map((item) => (
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
      <div className="pagination flex justify-center mt-4">
        {[...Array(Math.ceil(sortedInventory.length / itemsPerPage)).keys()].map((pageNumber) => (
          <button key={pageNumber} onClick={() => paginate(pageNumber + 1)} className={`px-4 py-2 border border-gray-300 rounded ${currentPage === pageNumber + 1 ? 'bg-blue-500 text-white' : ''}`}>
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllItem;
