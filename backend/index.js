const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log('MongoDB Connected');
})
.catch((error) => {
  console.error("Error: ", error);
});



app.listen(8800, () => {
  console.log('Server is running on port 800');
})