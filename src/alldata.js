function AllData(){
  const users = [
    {email: 'dom@me.com', name: 'Dom', password: 'Access123'},
    {email: 'blashley@school.edu', name: 'Brandy', password: 'Passcode321'},
    {email: 'mochalla@catz.com', name: 'Mocha', password: 'CatzRule!'},
  ]
  return (
    <>
    <h1>All Data</h1>
    <table style={{border: '1px solid black', width: '100%'}}>
      <thead>
        <tr>
          <th style={{backgroundColor: '#fd7e14'}}>Email</th>
          <th style={{backgroundColor: '#fd7e14'}}>Name</th>
          <th style={{backgroundColor: '#fd7e14'}}>Password</th>
        </tr>
      </thead>
      <tbody>
        { 
          users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.password}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </>
  );
}
