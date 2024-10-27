import React, { useState } from 'react';
import CalculatorForm from './CalculatorForm';
import ResultDisplay from './ResultDisplay';
import axios from 'axios';

function App() {
  const [result, setResult] = useState(null);

  const calculate = async (data) => {
    try {
      const response = await axios.post('/calculate', data);
      setResult(response.data.finalAmount.toFixed(2));
    } catch (error) {
      console.error('Error calculating result:', error);
      setResult('Error calculating result');
    }
  };


  return (
    <div className="App">
      <h1>Financial Finito App</h1>
      <CalculatorForm onCalculate={calculate} />
      {result && <ResultDisplay result={result} />}
    </div>
  );
}

export default App;
