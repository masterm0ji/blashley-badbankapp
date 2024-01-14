import React, { useState } from 'react';

const Deposit = () => {
  const [balance, setBalance] = useState(25);
  const [deposit, setDeposit] = useState(0);

  const handleDepositChange = (event) => {
    setDeposit(event.target.value);
  };

  const handleDepositSubmit = (event) => {
    event.preventDefault();
    if (deposit < 0.01 || deposit > 10000) {
      alert("You can only deposit between $0.01 and $10,000.");
    } else {
      setBalance(balance + Number(deposit));
      setDeposit(0);
    }
  };

  return (
    <div className="container">
      <h1>Deposit</h1>
      <form onSubmit={handleDepositSubmit}>
        <div className="form-group">
          <label htmlFor="deposit">Deposit Amount:</label>
          <input type="number" className="form-control" id="deposit" value={deposit} onChange={handleDepositChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <p>Your balance is: ${balance.toFixed(2)}</p>
    </div>
  );
}

window.Deposit = Deposit;
