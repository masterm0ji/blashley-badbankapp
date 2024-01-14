function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [withdrawAmount, setWithdrawAmount] = React.useState("");

  const handleWithdraw = (index) => {
    console.log("handleWithdraw function called with index: " + index);
    console.log("withdrawAmount: ", withdrawAmount)
    console.log("ctx.users: ", ctx.users);
    const amount = parseFloat(withdrawAmount);

    if (!isNaN(amount) && amount > 0) {
      const updatedUsers = [...ctx.users];

      if (amount <= updatedUsers[index].balance) {
        updatedUsers[index].balance -= amount;
        ctx.setUsers(updatedUsers);
        setWithdrawAmount("");
      } else {
        alert("Insufficient fundssss, you aint got no money!");
      }
    } else {
      alert("Please enter a positive number");
    }
  };

  return (
    <>
      <h1>Withdrawal</h1>

      {ctx.users.map((user, index) => (
        <div key={index} className="card">
          <div className="card-body">
            <h6>Name: {user.name}</h6>
            <p>Email: {user.email}</p>
            <p>Balance: {user.balance}</p>
            <input
              type="number"
              className="form-control"
              placeholder="Withdrawal Amount"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
            />
            <button onClick={() => handleWithdraw(index)}>Submit</button>
          </div>
        </div>
      ))}
    </>
  );
}
