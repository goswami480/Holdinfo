const mongoose = require('mongoose');

const tickerSchema = new mongoose.Schema({
  name: { 
    type: String,
     required: true 
    },
  last: {
     type: String, 
     required: true 
    },
  buy:
   { type: String,
     required: true 
    },
  sell: { 
    type: String, 
    required: true 
},
  volume: { 
    type: String,
     required: true 
    },
  base_unit: {
     type: String, 
     required: true 
    },
  createdAt: { 
    type: Date, 
    default: Date.now
 }
});

const Tickers = mongoose.model('Tickers', tickerSchema);

module.exports = Tickers;
