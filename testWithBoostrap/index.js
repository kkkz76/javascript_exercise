const root = ReactDOM.createRoot(document.getElementById("root"));

function NavBar(){
    return (
        <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="https://getbootstrap.com/docs/4.6/assets/brand/bootstrap-social-logo.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
      Bootstrap
    </a>
  </div>
</nav>
    )

}

function Hero(){
    return <h1>This is hero Section</h1>
}

function Footer(){
    return <h1>This is footer Section</h1>
}

function Page(){
    return(
        <div>
            <NavBar />
            <Hero />
            <Footer />
        </div>
    )
}


root.render(<Page />);

