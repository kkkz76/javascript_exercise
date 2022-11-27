import React, { Component } from 'react'
import ComponentsEx3 from './ComponentsEx3';

export default class ComponentEx2 extends Component {
  render() {
    const value = 3.144846;
    const rValue = Math.round(value);
    return (
      <div>
        ComponentEx2
        <h1>Round Value for 3.14 is {rValue}</h1>
        <ComponentsEx3/>
      </div>
    )
  }
}
