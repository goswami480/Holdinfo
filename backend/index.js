const axios = require('axios');
const Tickers = require('./models/tickers'); 

const gettickers = async (req, res) => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    console.log('API Response:', response.data); 
    const tickers = Object.values(response.data).slice(0, 11);
    console.log('Extracted Tickers:', tickers); 

    const newTickers = tickers.map(ticker => {
      const { name,last, buy, sell, volume, base_unit } = ticker;

      return new Tickers({
        name,
        last,
        buy,
        sell,
        volume,
        base_unit
      });
    });

    
    console.log('New Tickers:', newTickers);

    
    await Tickers.insertMany(newTickers);
    console.log('Tickers saved to database');

    res.status(200).json({
      message: 'Success',
      data: newTickers
    });
  } catch (error) {
    console.error('Error fetching tickers:', error.message);
    if (error.response) {
      console.error('Error Response Data:', error.response.data);
    }
    res.status(500).json({
      message: 'Error fetching tickers',
      error: error.message
    });
  }
};

module.exports = gettickers;
