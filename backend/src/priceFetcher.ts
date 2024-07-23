import axios from 'axios';
import Price from './models/Price';


//Replace API_URL_FOR_${symbol} with the actual API URL for fetching prices.


const fetchPrices = async () => {
  const symbols = ['GOOG', 'BTC', 'ETH', 'AAPL', 'TSLA'];
  try {
    for (const symbol of symbols) {
      const response = await axios.get(`API_URL_FOR_${symbol}`);
      const price = response.data.price;

      const newPrice = new Price({ symbol, price });
      await newPrice.save();
    }
  } catch (error) {
    console.error('Error fetching prices:', error);
  }
};

export default fetchPrices;
