import React, { useState } from 'react';

function CalculatorForm({ onCalculate }) {
  const [formData, setFormData] = useState({
    principal: '',
    rate: '',
    period: '',
    reduction: ''
  });

  const [showRate, setShowRate] = useState(false);
  const [showReduction, setShowReduction] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      principal: parseFloat(formData.principal),
      rate: showRate ? parseFloat(formData.rate) : 0,
      period: parseInt(formData.period),
      reduction: showReduction ? parseFloat(formData.reduction || 0) : 0
    };
    onCalculate(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Principal Amount ($):</label>
        <input
          type="number"
          name="principal"
          value={formData.principal}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Include Interest Rate?</label>
        <button type="button" onClick={() => setShowRate(!showRate)}>
          {showRate ? "No" : "Yes"}
        </button>
      </div>
      {showRate && (
        <div className="form-group">
          <label>Interest Rate (%):</label>
          <input
            type="number"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
            step="0.1"
          />
        </div>
      )}

      <div className="form-group">
        <label>Number of Years:</label>
        <input
          type="number"
          name="period"
          value={formData.period}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Include Annual Reduction?</label>
        <button type="button" onClick={() => setShowReduction(!showReduction)}>
          {showReduction ? "No" : "Yes"}
        </button>
      </div>
      {showReduction && (
        <div className="form-group">
          <label>Annual Reduction ($):</label>
          <input
            type="number"
            name="reduction"
            value={formData.reduction}
            onChange={handleChange}
            step="0.1"
          />
        </div>
      )}

      <button type="submit">Calculate</button>
    </form>
  );
}

export default CalculatorForm;
