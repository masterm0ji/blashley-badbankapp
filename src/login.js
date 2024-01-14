function Login() {

  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
