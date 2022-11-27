import React, { Component } from 'react'
import Clock from './Clock'
import Profile from './Profile'


export default class Myfriend extends Component {
  render() {
    return (
      <div><h1>Myfriend</h1>
        <Profile profilesrc= "https://st4.depositphotos.com/1012074/25277/v/600/depositphotos_252773324-stock-illustration-young-avatar-face-with-sunglasses.jpg" profileName="Mario"/>
        
        <Clock/>
      </div>
    )
  }
}
