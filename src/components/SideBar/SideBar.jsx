import React from 'react'
import Ava from './Ava.jpg' 
import './SideBar.css'
import './ResponsiveSB.css'


function SideBar() {
    return (
        <>
        <div className='sidebar_wrapper'>
            <div className='sidebar_wrapper-top'>
                <div className='sidebar_row'>
                    <img src={Ava} alt='Ava' className='ava_img'></img>
                    <h4>Bình Béo Bệu</h4>
                </div>
                <div className='sidebar_row icon_fb'>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png' alt='1'/>
                    <h4>Bạn bè</h4>
                </div>
                <div className='sidebar_row icon_fb'>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png' alt='1'/>
                    <h4>Đã lưu</h4>
                </div>
                <div className='sidebar_row icon_fb'>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png' alt='1'/>
                    <h4>Trang</h4>
                </div>
                <div className='sidebar_row icon_fb'>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png' alt='1'/>
                    <h4>Nhóm của bạn</h4>
                </div>
                <div className='sidebar_row icon_fb'>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png' alt='1'/>
                    <h4>Marketplace</h4>
                </div>
                <div className='more_btn'>
                    <i class="fas fa-chevron-down"></i>
                    <h4>Xem thêm</h4>
                </div>
            </div>
            
            <div className='sidebar_wrapper__bot'>
                <div className='sidebar_wrapper__bot-title'>
                    <h3>Lối tắt của bạn</h3>
                    <span>Chỉnh sửa</span>
                </div>
                <div className='sidebar_wrapper__bot-row'>
                    <img src={Ava} alt='Ava' className='group-img'></img>
                    <h4>[PROPTIT] D18 D19 D20</h4>
                </div>
                <div className='sidebar_wrapper__bot-row'>
                    <img src={Ava} alt='Ava' className='group-img'></img>
                    <h4>[PROPTIT] D17 D18 D19</h4>
                </div>
                <div className='sidebar_wrapper__bot-row'>
                    <img src={Ava} alt='Ava' className='group-img'></img>
                    <h4>[PROPTIT] JAVA D19</h4>
                </div>
                <div className='sidebar_wrapper__bot-row'>
                    <img src={Ava} alt='Ava' className='group-img'></img>
                    <h4>[PROPTIT] Ban Sự Kiện</h4>
                </div>
                <div className='sidebar_wrapper__bot-row'>
                    <img src={Ava} alt='Ava' className='group-img'></img>
                    <h4>Cộng Đồng S2B</h4>
                </div>
                <div className='more_btn'>
                    <i class="fas fa-chevron-down"></i>
                    <h4>Xem thêm</h4>
                </div>
            </div>
        </div>
       
        </>
    )
}

export default SideBar;
