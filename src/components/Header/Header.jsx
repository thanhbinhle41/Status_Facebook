import React from 'react'
import './Header.css'
import Ava from './Ava.jpg' 
import './ResponsiveHeader.css'


function Header() {
    return (
        
        <header className='header'>
            <div className='header_left'>
                <img alt='Facebook icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'></img>
                <div className='header-input'>
                    <i class="fas fa-search"></i>
                    <input type='text' placeholder='Tìm kiếm trên Facebook'></input>
                </div>
            </div>

            <div className='header_mid'>
                <div className='heder-option active'>
                    <i class="fas fa-home"></i>
                </div>
                <div className='heder-option'>
                    <i class="fas fa-film"></i>
                </div>
                <div className='heder-option'>
                    <i class="fas fa-store"></i>
                </div>
                <div className='heder-option'>
                    <i class="fas fa-users"></i>
                </div>
                <div className='heder-option'>
                    <i class="fas fa-gamepad"></i>
                </div>

            </div>

            <div className='header_right'>
                <div className='header-info'>
                    <img src={Ava} alt='Ava' className='ava_img'></img>
                    <h4>Bình Béo Bệu</h4>
                </div>
                <div className='header_right-option'>
                    <i class="fas fa-bars"></i>
                </div>
                <div className='header_right-option'>
                    <i class="fab fa-facebook-messenger"></i>
                </div>
                <div className='header_right-option'>
                    <i class="fas fa-bell"></i>
                </div>
                <div className='header_right-option'>
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>
        </header>
        
    )
}

export default Header;
