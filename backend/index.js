const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.listen(8800, () => {
  console.log('Server is running on port 8800');
})