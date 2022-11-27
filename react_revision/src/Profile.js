import React, { Component} from 'react'

export default class profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <img src={this.props.profilesrc} alt="Mario"/>
        <h3>Name = {this.props.profileName}</h3>
      </div>
    )
  }
}

profile.defaultProps = {
    profilesrc : "https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.490.medium.jpg/1594668408164.jpg",
    profileName : "Mgmg"
}