function Deposit() {
  const ctx = React.useContext(UserContext);

  const [depositAmount, setDepositAmount] = React.useState("");
  const [update, setUpdate] = React.useState(0);

  const handleDeposit = (index) => {
    const amount = parseFloat(depositAmount);

    if (!isNaN(amount) && amount > 0) {
      const updatedUsers = [...ctx.users];
      updatedUsers[index].balance = parseFloat(updatedUsers[index].balance + amount).toFixed(2);
      ctx.setUsers(updatedUsers);
      setDepositAmount("");
      setUpdate(update + 1);
    } else {
      alert("Please enter a valid positive number for the deposit amount.");
    }
  };

  return (
    <>
      <h1>Deposit</h1>
      {ctx.users.map((user, index) => (
        <div key={index} className="card">
          <div className="card-body">
            <h6>Name: {user.name}</h6>
            <p>Email: {user.email}</p>
            <p>Balance: {user.balance}</p>
            <input
              type="number"
              className="form-control"
              placeholder="Deposit Amount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
            />
            <button onClick={() => handleDeposit(index)}>Submit</button>
          </div>
        </div>
      ))}
    </>
  );
}
