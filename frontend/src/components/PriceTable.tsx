import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchPrices } from '../slices/priceSlice';

const PriceTable: React.FC<{ symbol: string }> = ({ symbol }) => {
  const dispatch: AppDispatch = useDispatch();
  const prices = useSelector((state: RootState) => state.prices.data);
  const status = useSelector((state: RootState) => state.prices.status);

  useEffect(() => {
    dispatch(fetchPrices(symbol));
    const interval = setInterval(() => {
      dispatch(fetchPrices(symbol));
    }, 5000);
    return () => clearInterval(interval);
  }, [dispatch, symbol]);

  return (
    <div>
      <h1>Real-Time Prices for {symbol}</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <table>
          <thead>
            <tr>
              <th>Price</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((price, index) => (
              <tr key={index}>
                <td>{price.price}</td>
                <td>{new Date(price.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PriceTable;
