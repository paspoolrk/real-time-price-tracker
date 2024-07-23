import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import PriceTable from '../components/PriceTable';
import ChangeSymbolModal from '../components/ChangeSymbolModal';

const Home: React.FC = () => {
  const [symbol, setSymbol] = useState('GOOG');

  return (
    <Provider store={store}>
      <div>
        <PriceTable symbol={symbol} />
        <ChangeSymbolModal onChange={setSymbol} />
      </div>
    </Provider>
  );
};

export default Home;
