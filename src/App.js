import React, { Component, Fragment } from 'react'
import './App.css'
export default class App extends Component {
  
  handleClick=(e)=>{
    window.location.href='http://127.0.0.1:3000/twitter'
    return null
  }

  render() {
    return (
      <Fragment>
        <center><h1>welcome to twitter client</h1></center><br/>
        <center><button onClick={this.handleClick} className='tweetbutton'>click me to login in twitter</button></center>
      </Fragment>
    )
  }
}
