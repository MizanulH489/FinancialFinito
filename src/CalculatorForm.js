import React, { useState } from 'react';

function CalculatorForm({ onCalculate }) {
  const [formData, setFormData] = useState({
    principal: '',
    rate: '',
    period: '',
    reduction: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      principal: parseFloat(formData.principal),
      rate: parseFloat(formData.rate),
      period: parseInt(formData.period),
      reduction: parseFloat(formData.reduction || 0)
    };
    onCalculate(data);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Principal Amount ($):</label>
        <input type="number" name="principal" value={formData.principal} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Interest Rate (%):</label>
        <input type="number" name="rate" value={formData.rate} onChange={handleChange} step="0.1" required />
      </div>

      <div className="form-group">
        <label>Number of Years:</label>
        <input type="number" name="period" value={formData.period} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Annual Reduction ($):</label>
        <input type="number" name="reduction" value={formData.reduction} onChange={handleChange} step="0.1" />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}

export default CalculatorForm;
