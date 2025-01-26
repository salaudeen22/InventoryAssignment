Dynamic Inventory Management Table
Project Overview
This is a dynamic inventory management app built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app allows users to manage inventory items efficiently, with features to add, edit, delete, filter, and sort items in stock. Low-stock items are highlighted for better visibility.

Features
Add Items:
Users can add new items to the inventory by providing the name, category, and quantity.

Edit and Delete Items:
Existing inventory items can be updated or removed.

Filter by Category:
The table can be filtered to display items belonging to a specific category.

Sort by Quantity:
Users can sort items in ascending or descending order of quantity.

Low-Stock Highlighting:
Items with a quantity below 10 are automatically highlighted for quick attention.

Technologies Used
Frontend
React.js: For the user interface and dynamic table rendering.
CSS/Tailwind CSS: For responsive and clean UI design.
Backend
Node.js: For server-side scripting.
Express.js: For handling API requests.
Database
MongoDB: For storing inventory data.
Installation Instructions
Prerequisites
Ensure you have the following installed on your system:

Node.js
MongoDB
Git
Setup Steps
Clone the Repository:

bash
Copy
Edit
git clone <repository-url>
cd dynamic-inventory-management
Install Dependencies: Navigate to both the client and server directories and run:

bash
Copy
Edit
npm install
Set Up Environment Variables: Create a .env file in the server directory and add:

env
Copy
Edit
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
Start the Backend Server: Navigate to the server directory and run:

bash
Copy
Edit
npm start
Start the Frontend Development Server: Navigate to the client directory and run:

bash
Copy
Edit
npm start
Access the Application: Open your browser and go to http://localhost:3000.

Application Workflow
Home Page:
Displays a table of all inventory items, categorized by name, category, and quantity.
Add New Item:
Click the "Add Item" button to open a form for adding a new inventory item.
Edit/Delete Item:
Use the edit or delete buttons next to an item in the table to modify or remove it.
Filter Items:
Select a category from the dropdown to filter items by their category.
Sort by Quantity:
Click the "Sort" button to reorder items by quantity.
Low-Stock Highlight:
Items with a quantity below 10 are displayed with a special style (e.g., red background or bold text).