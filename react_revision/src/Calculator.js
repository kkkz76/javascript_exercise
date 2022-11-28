import React, { Component } from 'react'

export default class Calculator extends Component {

constructor(props){
    super(props);
    this.state = {Temp:""};
    this.CHandler = this.CHandler.bind(this);


}

CHandler(e){
    this.setState({Temp:e.target.value});
    // alert(e.target.value);
    
}


  render() {
    const Temp = this.state.Temp;
    return (
      <fieldset>
        <legend>Please put Temp in Degree Celcius</legend>
        <input value={Temp} onChange={this.CHandler}/>
        <BoilingVerdict celcius={parseInt(Temp)}/>
      </fieldset>
    )
  }
}

function BoilingVerdict(props){
    if(props.celcius >= 100){
        return (<p>Water would boil</p>)
    }else{
        return (<p>Water would not boil</p>)
    };
}