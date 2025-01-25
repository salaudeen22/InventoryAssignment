const express = require('express');
const cors = require('cors');
const db=require("./db/db");

const inventoryRoutes = require('./routes/Inven');

require('dotenv').config();
db();



const app = express();

app.use(express.json());
app.use(cors({
  origin: '*',  
}));


app.use('/api/inventory', inventoryRoutes);

const PORT = process.env.PORT || 3999;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
