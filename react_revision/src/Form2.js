import React, { Component } from 'react'


export default class Form2 extends Component {

    constructor(props){
        super(props);
        this.state = {value:"",choice:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1= this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }
    handleChange1(e){
        this.setState({choice: e.target.value});
        
    }
    handleSubmit(e){
        alert("Form was submitted"+ this.state.value + this.state.choice);
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>Name :
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label>


            <select  value={this.setState.choice} onChange={this.handleChange1}>

            <option value="Car">Car</option>
            <option value="skate">Skate</option>
            <option value="Bike">Bike</option>

            </select>

            <input type="submit" value="submit" /> 
                   
        </form>
      )
  }
}
