function Home(){
    return (
      <div className="m-3 p-4 bg-light">
      <Card className="d-flex justify-content-center"
        txtcolor="black"
        header="Bad Bank"
        title="Welcome to Bad Bank!"
        body={(<img src="/public/bank.png" className="img-fluid" alt="Responsive image"/>)}
        text="You can trust us to expose all of your personal information to the world."
      />    
    </div>
    );  
  }
  