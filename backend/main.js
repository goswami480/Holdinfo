require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors=require("cors")
const auth = require('./auth'); 
const app = express();
const PORT = process.env.PORT || 3001;

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('MONGO_URI is not defined');
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
  process.exit(1); 
});
app.use(cors());
app.use('/', auth);  
app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error: ${err}`);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
