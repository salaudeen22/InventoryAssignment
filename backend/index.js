const express = require('express');
const cors = require('cors');
const db=require("./db/db");


require('dotenv').config();
db();



const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3999;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
