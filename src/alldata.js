function AllData() {
  const ctx = React.useContext(UserContext);

  return (
    <>
      <h1>All Data</h1>
      <table style={{border: '1px solid black', width: '100%'}}>
        <thead>
          <tr>
            <th style={{backgroundColor: '#fd7e14'}}>Email</th>
            <th style={{backgroundColor: '#fd7e14'}}>Name</th>
            <th style={{backgroundColor: '#fd7e14'}}>Password</th>
            <th style={{backgroundColor: '#fd7e14'}}>Balance</th>
          </tr>
        </thead>
        <tbody>
          { 
            ctx.users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.password}</td>
                  <td>{user.balance}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}
