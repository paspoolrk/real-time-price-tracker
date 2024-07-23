import React, { useState } from 'react';

interface ChangeSymbolModalProps {
  onChange: (symbol: string) => void;
}

const ChangeSymbolModal: React.FC<ChangeSymbolModalProps> = ({ onChange }) => {
  const [symbol, setSymbol] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onChange(symbol);
  };

  return (
    <div>
      <h2>Change Symbol</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Enter symbol"
        />
        <button type="submit">Change</button>
      </form>
    </div>
  );
};

export default ChangeSymbolModal;
