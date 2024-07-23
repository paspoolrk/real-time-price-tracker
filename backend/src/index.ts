import express from 'express';
import connectDB from './database';
import fetchPrices from './priceFetcher';
import Price from './models/Price';

const app = express();
const port = 5000;

connectDB();

// Endpoint to fetch the most recent 20 entries for a particular symbol
app.get('/prices/:symbol', async (req, res) => {
  const { symbol } = req.params;
  try {
    const prices = await Price.find({ symbol }).sort({ timestamp: -1 }).limit(20);
    res.json(prices);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  setInterval(fetchPrices, 5000); // Fetch prices every 5 seconds
});
