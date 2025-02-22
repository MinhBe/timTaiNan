const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const pinRoute = require('./routes/pins');


dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log('MongoDB Connected');
})
.catch((error) => {
  console.error("Error: ", error);
});

app.use('/api/pins', pinRoute);

app.listen(8800, () => {
  console.log('Server is running on port 8800');
})