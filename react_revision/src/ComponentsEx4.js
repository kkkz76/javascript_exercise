import React, { Component } from 'react'
import Myfriend from './Myfriend'

export default class ComponentsEx4 extends Component {
  render() {
    return (
      <div>
        <h1>Shop Item name is {this.props.listname.price}</h1>
        <Myfriend/>
      </div>
    )
  }
}
