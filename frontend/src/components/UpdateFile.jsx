import React, { useState } from "react";
import axios from "axios";

const UpdateFile = ({ setUpdateShow, selectedItem }) => {
  const [name, setName] = useState(selectedItem.name);
  const [category, setCategory] = useState(selectedItem.category);
  const [quantity, setQuantity] = useState(selectedItem.quantity);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5656/api/inventory/${selectedItem._id}`,
        { name, category, quantity }
      );
      console.log("Item updated:", response.data);
      setUpdateShow(false); 
    } catch (error) {
      console.error("Error updating item:", error);
   
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5656/api/inventory/${selectedItem._id}`
      );
      console.log("Item deleted:", response.data);
      setUpdateShow(false); 
    } catch (error) {
      console.error("Error deleting item:", error);
    
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-6 space-y-6 w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
          onClick={() => setUpdateShow(false)} 
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-xl font-semibold">Update Item</h2>

       

        <form onSubmit={handleUpdate}>
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-lg"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="flex justify-between space-x-4 mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full"
            >
              Update Item
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 w-full"
              onClick={handleDelete}
            >
              Delete Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFile;
