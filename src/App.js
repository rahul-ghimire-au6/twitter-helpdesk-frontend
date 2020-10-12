import React, { Component, Fragment } from 'react'
import './App.css'
import twitter1 from './assests/img/a.jpg'
export default class App extends Component {
  
  handleClick=(e)=>{
    window.location.href='http://127.0.0.1:3000/twitter'
    return null
  }

  render() {
    return (
      <Fragment>
        <div style={{display:'flex'}}>
        <div><center><img src={twitter1} alt='twitter wallpaper' className='twitter_img'/></center></div>
        <div style={ { marginLeft:'9rem',display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <center><h1 className='twitter_heading'>Welcome to twitter client</h1></center><br/>        
        <center><button onClick={this.handleClick} className='tweetbutton'>click me to login in twitter</button></center>
        </div>
        </div>
      </Fragment>

    )
  }
}
