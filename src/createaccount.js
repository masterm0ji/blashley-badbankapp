function CreateAccount(){
  const ctx = React.useContext(UserContext); 

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newUser = {
      name: name,
      email: email,
      password: password
    };

    ctx.users.push(newUser);

    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="container p-3" style={{backgroundColor:'#6c757d', color: '#ffffff'}}>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}