import React, { Component } from 'react'

export default class Loginsystem extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn:false}
        this.handlelogin = this.handlelogin.bind(this);
        this.handlelogout = this.handlelogout.bind(this); 

    }

    handlelogin(){
        this.setState({isLoggedIn:true});
    }
    handlelogout(){
        this.setState({isLoggedIn:false});
    }
    


  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button;
    if(isLoggedIn){
        button = <button onClick={this.handlelogout}>LogOut</button>
    }else{
        button = <button onClick={this.handlelogin}>LogIn</button>
    }




    return (
      <div><Greeting isLoggedIn={isLoggedIn}/>
      {button}
      
      </div>
      
    )
  }
}

function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if(isLoggedIn) {
            return <UserGreeting/>
        }else {
            return <GuestGreeting/>
        }
        
}
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
    return <h1>Please sign up!</h1>;
}
