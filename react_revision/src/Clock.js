import React, { Component } from 'react'
import Loginsystem from './Loginsystem';
import NumberList from './NumberList';

const number1 = [1,2,3,4,5,6,7]; 
export default class Clock extends Component {
  

  constructor(props) {
    super(props);
    this.state = {date: new Date()}

  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }

  
  render() {
   
    return (
      <div>
        <h1>Clock</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>

        <NumberList numbers = {number1}/>
        <Loginsystem/>
      </div>
   

      
    )
  }
}

