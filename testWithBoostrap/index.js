const root = ReactDOM.createRoot(document.getElementById("root"));

function NavBar(){
    return (
        <div class="text-center">
        <img src="react_1.png" class="rounded "  />
        <h1>React.JS</h1>
      </div>

      
   
    )

}

function Hero(){
    return (
        <div class="text-left">
       <h1>Main Feature of React JS</h1>
       <ul>
         <li>Composable</li>
         <li>JSX</li>
         <li>Declarative</li>
       </ul>
      </div>

      
   
    )
    
    
    
}

function Footer(){
    return <h5 class="bg-dark text-white p-3 text-center">Created by LTE Member 2022, All Right Reserved.</h5>
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

