import React, { useState } from 'react'
import './Popup.css'
import Ava from './Ava.jpg' 



function Popup({showPopUp, setShowPopUp, status, setStatus}) {

    const [showUpLoadImg, setShowUpLoadImg] = useState(false);
    const [imageUpLoad, setImageUpLoad] = useState('');
    const [isShowImg, setIsShowImg] = useState(false);
    const [newStatus, setNewStatus] = useState({
        title: '',
        image: '',
        haveImage: false,
        showOptions: false,
        numberCmt: 0,
        listCmt: []
    });

    const handleUpLoadImg = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImageUpLoad(reader.result);
                setIsShowImg(true);
            }
        }
        reader.readAsDataURL(e.target.files[0]);   
    }


    const onChangeTitle = (e) => {
        setNewStatus({
            ...newStatus,
            title: e.target.value
        })
    }

    const postStatus = () => {
        if (isShowImg === true) {
            newStatus.haveImage = true;
            newStatus.image = imageUpLoad;
        }
        setStatus([newStatus, ...status]);
        setShowPopUp(false);
        setImageUpLoad('');
        setIsShowImg(false);
        // console.log(newStatus);
        // console.log(status);
    }

    const exitImage = () => {
        setIsShowImg(false);
        setImageUpLoad('');
        setShowUpLoadImg(!showUpLoadImg)
    }

    return (
        <>
        <div className='popup_background'>
            <div className='popup_wrapper'>
                <div className='popup_heading'>   
                    <h2>Tạo bài viết</h2>
                    <div className='popup_exit' onClick={() => {setShowPopUp(!showPopUp)}}>
                        <i class="fas fa-times"></i>
                    </div>
                </div>

                <div className='popup_profile'>
                    <img src={Ava} alt='Ava' className='ava_img'></img>
                    <div className='popup_profile-name'>
                        <h4>Bình Béo Bệu</h4>
                        <div className='popup_profile-status'>
                            <div className='popup_profile-status_wrapper'>
                                <i class="fas fa-user-friends"></i>
                                <p>Bạn bè</p>
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='popup_message'>
                    <div className='popup_message-input'>
                        <textarea type='text' style={{resize: 'none'}} onChange={onChangeTitle} 
                        placeholder='Bình ơi, bạn đang nghĩ gì thế?'>
                        </textarea>
                    </div>
                    <div className='popup_message-emoji'>
                        <img alt='Change color' src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"></img>
                        <i class="far fa-smile-beam"></i>
                    </div>
                </div>

                {showUpLoadImg ?
                <div className='img_upload-wrapper'>
                    <label className='img_upload-input-wrapper' htmlFor='input-image'>
                        <div className='img_upload-exit-btn' onClick={exitImage}>
                            <i class="fas fa-times"></i>
                        </div>
                        <input type='file' accept='image/*' name='image-upload' 
                        id='input-image' onChange={handleUpLoadImg}></input>
                        {isShowImg ? <img src={imageUpLoad} alt='uploadPC' className='image_upload-style' />
                        :<div className='img_upload-input'>
                            <div className='img_upload-icon'>
                                <i class="far fa-file-image"></i>
                            </div>
                            <h3>Thêm ảnh/video</h3>
                            <p>Hoặc kéo và thả</p>
                        </div>
                        }
                    </label>
                    
                    <div className='img_upload-phone'>
                        <div className='img_upload-phone-title'>
                            <div className='img_upload-phone-icon'>
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <p>Thêm ảnh từ thiết bị di động</p>
                        </div>
                        <div className='img_upload-phone-btn'>
                        Thêm
                        </div>
                    </div>
                </div>
                :null}
                


                <div className='popup_listOption'>
                    <div className='popup_listOption-wrapper'>
                        <span>Thêm vào bài viết</span>
                        <div className='popup_options'>
                            <i class="fas fa-images" style={{color: 'green'}}
                            onClick={() => {setShowUpLoadImg(!showUpLoadImg)}}></i>
                            <i class="fas fa-user-tag" style={{color: '#1877F2'}}></i>
                            <i class="far fa-laugh-wink" style={{color: 'orange'}}></i>
                            <i class="fas fa-map-marker-alt" style={{color: 'red'}}></i>
                            <i class="fas fa-music" style={{color: 'red'}}></i>
                        </div>
                    </div>
                    <div className='popup_upStatus'> 
                        <button className='popup_upStatus-btn'
                        onClick={postStatus}>Đăng</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Popup;
