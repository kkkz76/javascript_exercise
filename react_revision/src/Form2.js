import React, { Component } from 'react'

export default class Form2 extends Component {

    constructor(props){
        super(props);
        this.state = {value:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }
    handleSubmit(e){
        alert("Form was submitted"+ this.state.value);
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>Name :
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="submit" />         
        </form>
      )
  }
}
