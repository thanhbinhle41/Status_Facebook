import React from 'react'
import './ListFriend.css'
import Ava from './Ava.jpg' 
import './ResponsiveLF.css'


function ListFriend() {
    return (
        <>
        
        <div className='listfriend_wrapper'>
            <div className='myPage'>
                <div className='myPage_heading'>
                    <h3>Trang của bạn</h3>
                    <div className='myPage_heading-option'>
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                <div className='myPage_info'>   
                    <img src={Ava} alt='Ava' className='ava_img'></img>
                    <h4>My Status made by BBB</h4>
                </div>
                <div className='myPage_ListOptions'>
                    <div className='myPage_option'>
                        <i class="far fa-bell"></i>
                        <p>20+ Thông báo</p>
                    </div>
                    <div className='myPage_option'>
                        <i class="fas fa-bullhorn"></i>
                        <p>Tạo quảng cáo</p>
                    </div>
                </div>
            </div>

            <div className='listContact'>
                <div className='listContact_heading'>
                    <h3>Người liên hệ</h3>
                    <div className='listContact_heading-options'>
                        <div className='listContact_heading-option'>
                            <i class="fas fa-video"></i>
                        </div>
                        <div className='listContact_heading-option'>
                            <i class="fas fa-search"></i>
                        </div>
                        <div className='listContact_heading-option'>
                            <i class="fas fa-ellipsis-h"></i>
                        </div>   
                    </div>
                </div>

                <div className='friend_contact'>
                    <div className='friend_info'>
                        <img src={Ava} alt='Ava' className='ava_img'></img>
                        <h4>Trần Văn Thắng</h4>
                    </div>
                    <div className='friend_info'>
                        <img src={Ava} alt='Ava' className='ava_img'></img>
                        <h4>Trần Minh Quang</h4>
                    </div>
                    <div className='friend_info'>
                        <img src={Ava} alt='Ava' className='ava_img'></img>
                        <h4>Lê Xuân Minh</h4>
                    </div>
                    <div className='friend_info'>
                        <img src={Ava} alt='Ava' className='ava_img'></img>
                        <h4>Nguyễn Văn Hậu</h4>
                    </div>
                    <div className='friend_info'>
                        <img src={Ava} alt='Ava' className='ava_img'></img>
                        <h4>Đỗ Thị Thu Thảo</h4>
                    </div>
                    <div className='friend_info'>
                        <img src={Ava} alt='Ava' className='ava_img'></img>
                        <h4>Nguyễn Quỳnh Mai</h4>
                    </div>
                    <div className='friend_info'>
                        <img src={Ava} alt='Ava' className='ava_img'></img>
                        <h4>Nguyễn Huyền Trang</h4>
                    </div>
                    <div className='friend_info'>
                        <img src={Ava} alt='Ava' className='ava_img'></img>
                        <h4>Nguyễn Mạnh Tuân</h4>
                    </div>
                    <div className='friend_info'>
                        <img src={Ava} alt='Ava' className='ava_img'></img>
                        <h4>Dương Maple</h4>
                    </div>
                    <div className='friend_info'>
                        <img src={Ava} alt='Ava' className='ava_img'></img>
                        <h4>Hảo Phạm</h4>
                    </div>
                    
                </div>

            </div>
        
        
        </div>
       
       
        </>
    )
}

export default ListFriend;
