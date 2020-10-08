import React, { Component, Fragment } from 'react'
import './left_nav.css'
import {ClockCircleOutlined, HomeOutlined,TeamOutlined, CommentOutlined,CreditCardOutlined, ShopOutlined} from '@ant-design/icons'
import red_logo from '../../assests/img/red_logo.png'
import tube_icon from '../../assests/img/tube.png'

export default class LeftNav extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar">
                    <div className="dot-container">
                        <div className='red-dot'></div>
                        <div className='yellow-dot'></div>
                        <div className='green-dot'></div>
                    </div>
                    <div className='diamond_container'>
                    <img src={red_logo} alt='red diamond logo' className='diamond_logo' />                    
                    </div>
                    <div className='icon_container'>
                    <ClockCircleOutlined className='icon_style'/>
                    <HomeOutlined className='icon_style'/>
                    <TeamOutlined className='icon_style'/>
                    <CommentOutlined className='icon_style'/>
                    <CreditCardOutlined className='icon_style'/>
                    <ShopOutlined className='icon_style'/>
                    </div>
                    <div className='tube_container'>
                        <img src={tube_icon} alt='tube icon' className='tube' />
                    </div>
                    <div className='profile_image_container'>
                        <img src={this.props.profilepic} alt='profile pic' className='profile_pic' />
                    </div>
                </nav>
            </Fragment>
        )
    }
}
