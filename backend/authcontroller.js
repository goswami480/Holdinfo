const Tickers = require('./models/tickers'); // Ensure Tickers model is correctly imported

const getSavedTickers = async (req, res) => {
  try {
  
    const tickers = await Tickers.find({});

    
    const tickersWithDifference = tickers.map(ticker => {
     
      const buy = parseFloat(ticker.buy);
      const sell = parseFloat(ticker.sell);

    
      const difference = sell - buy;
        
      
      return {
        ...ticker.toObject(),
        difference
      };
    });

  
    res.status(200).json({
      message: 'Success',
      data: tickersWithDifference
    });
  } catch (error) {
    console.error('Error retrieving tickers:', error.message);
    res.status(500).json({
      message: 'Error retrieving tickers',
      error: error.message
    });
  }
};

module.exports = getSavedTickers;
