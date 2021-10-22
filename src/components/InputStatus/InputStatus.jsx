import React, { useState } from 'react'
import './InputStatus.css'
import Ava from './Ava.jpg' 
import './ResponsiveIS.css'



function InputStatus({showPopUp, setShowPopUp, status, setStatus}) {
    

    const [newCmt, setNewCmt] = useState({
        textCmt: '',
        image: '',
        haveImage: false,
        showOptions: false
    })

    const handleCmtInput = (e, index) => {
        if (!e.shiftKey && e.keyCode === 13) {
            newCmt.textCmt = e.currentTarget.textContent;
            let tmpStatus = status;
            tmpStatus[index].numberCmt += 1;
            tmpStatus[index].listCmt.push(newCmt);
            setStatus(tmpStatus);
            e.currentTarget.textContent = '';
            // console.log(status[index]);
            setNewCmt({
                textCmt: '',
                image: '',
                haveImage: false,
                showOptions: false
            })
        }
        else {
            return;
        }
    }

    const openCmtOptions = (index, cmtIndex) => {
        status[index].listCmt[cmtIndex].showOptions = !status[index].listCmt[cmtIndex].showOptions ;
        setStatus([...status]);
        
    }

    const handleImgCmt = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setNewCmt({
                    ...newCmt,
                    haveImage: true,
                    image: reader.result
                });
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    const handleDeleteCmt = (index, cmtIndex) => {
        status[index].listCmt = status[index].listCmt.filter((item, i) => {
            return i !== cmtIndex;
        })
        setStatus([...status]);
        console.log(status[index]);
    }

    const handleExitCmtImgBtn = () => {
        setNewCmt({
            ...newCmt,
            haveImage: false,
            image: false,
        });
    }

    const handleDeletePost = (i) => {
        status = status.filter((item, index) => {
            return index !== i
        })
        setStatus(status);
    }

    const showOptionsPost = (index) => {
        status[index].showOptions = !status[index].showOptions;
        setStatus([...status]);
    }

    return (
        <>
        <div className='status_wrapper'>
            <div className="message_box">
                <div className = 'message_box-top'>
                    <img src={Ava} alt='Ava' className='ava_img'></img>
                    <input type='text' placeholder='Bình ơi, bạn đang nghĩ gì' className='input_message'
                    onClick={() => setShowPopUp(true)}>
                    </input>
                </div>
                <div className='message_box-bot'>
                    <div className='message_box-bot-option'>
                        <i class="fas fa-video video_icon"></i>
                        <h3>Video trực tiếp</h3>
                    </div>
                    <div className='message_box-bot-option'>
                        <i class="fas fa-photo-video photo-video_icon"></i>
                        <h3>Ảnh/Video</h3>
                    </div>
                    <div className='message_box-bot-option'>
                        <i class="far fa-laugh-beam emoji_icon"></i>
                        <h3>Ảnh/Video</h3>
                    </div>
                </div> 
            </div>

            {status.map((item,index) =>
                <div className='post'>
                    <div className='post_top'>
                        <div className='post_top-heading'>
                            <img src={Ava} alt='Ava' className='ava_img'></img>
                            <div className='post_top-info'>
                                <h4>Bình Béo Bệu</h4>
                                <p>4 giờ <i class="fas fa-globe-europe"></i></p>
                            </div>
                        </div>
                        <div className='status_option'>
                            <div className='option_btn' onClick={() => showOptionsPost(index)}>
                                <i class="fas fa-ellipsis-h"></i>
                            </div>  
                            {item.showOptions ? 
                            <div className='post_options'>
                                <div className='post_options-wrapper' onClick={() => handleDeletePost(index)}>
                                    <i class="far fa-trash-alt"></i>
                                    <h4>Xoá bài viết</h4>
                                </div>
                                <div className='post_options-wrapper'>
                                    <i class="far fa-edit"></i>
                                    <h4>Chỉnh sửa bài viết</h4>
                                </div>
                                <div className='post_options-wrapper'>
                                    <i class="fas fa-globe-americas"></i>
                                    <h4>Chỉnh sửa đối tượng</h4>
                                </div>
                                <div className='post_options-wrapper'>
                                    <i class="far fa-bell-slash"></i>
                                    <h4>Tắt thông báo bài viết này</h4>
                                </div>
                            </div>
                            :null}
                        </div>
                        
                        
                    </div>
                    <div className='post_mid'>
                        <div className='post_message'>
                            <p>{item.title}</p>
                        </div>
                        {item.haveImage ? 
                        <div className='post_img'>
                            <img src={item.image} className='status_image' alt='alo123'></img>
                        </div>
                        : null}
                        
                    </div>
                    <div className='post_bot'>
                        <div className='post_bot-listOptions'>
                            <div className='post_bot-option'>
                                <i class="fas fa-thumbs-up"></i>
                                <p>Thích</p>
                            </div>
                            <div className='post_bot-option'>
                                <i class="far fa-comment"></i>
                                <p>Bình luận</p>
                            </div>
                            <div className='post_bot-option'>
                                <i class="fas fa-share"></i>
                                <p>Share</p>
                            </div>
                        </div>
                    </div>
                    <div className='comment_wrapper'>
                        {item.listCmt.map((cmt, cmtIndex) => 
                        <div className='list_comments'>
                            <img src={Ava} alt='Ava' className='ava_img'></img>
                            <div className='list_comments-box'>
                                <div className='list_comments-text-wrapper'>
                                    <div className='list_comments-text-wrapper-top'>
                                        <div className='list_comments-text'>
                                            <h4>Bình Béo Bệu</h4>
                                            <p>{cmt.textCmt}</p>
                                        </div>
                                        <div className='list_comments-options'>
                                            <div className='list_comments-options_btn' onClick={() => openCmtOptions(index, cmtIndex)}>
                                                <i class="fas fa-ellipsis-h"></i>
                                            </div>
                                            {cmt.showOptions ? 
                                            <div className='delete_cmt' onClick={() => handleDeleteCmt(index, cmtIndex)}>
                                                <span>Xoá bình luận</span>
                                            </div>
                                            :null}
                                        </div>
                                    </div>
                                    {cmt.haveImage ? 
                                    <div className='list_comments-text-wrapper-bot'>
                                        <img src={cmt.image} alt='cmt_img'></img>
                                    </div>
                                    :null}
                                </div>
                                <div className='comment_react'>
                                    <div className='cmt_react-item'>Thích</div>
                                    <div className='cmt_react-dot'>.</div>
                                    <div className='cmt_react-item'>Trả lời</div>
                                    <div className='cmt_react-dot'>.</div>
                                    <div className='cmt_react-time'>2 giờ</div>
                                </div>
                            </div>
                        </div>
                        )}

                        <div className='comment_input-wrapper'>
                            <div className='comment_input-wrapper-top'>
                                <img src={Ava} alt='Ava' className='ava_img'></img>
                                <div className='comment_input'>
                                    <div contentEditable={true} data-text='Viết bình luận ...'
                                    className='comment_text'
                                    onKeyDown={(e) => handleCmtInput(e, index)}>
                                    </div>

                                    <label className='comment_options-icon' htmlFor='img_cmt'>
                                        <i class="fas fa-camera"></i>
                                        <input type='file' accept='image/*' id='img_cmt'
                                        onChange={handleImgCmt}>
                                        </input>
                                    </label>
                                </div>
                            </div>
                            
                            {newCmt.haveImage ?
                            <div className='img_cmt-wrapper'>
                                <img src={newCmt.image} alt='cmt_img' className='img_cmt-style'></img>
                                <div className='img_cmt-exit_btn' onClick={handleExitCmtImgBtn}>
                                    <i class="fas fa-times"></i>
                                </div>
                            </div>
                            :null}
                        </div>
                    </div>
                </div>
            
            )}
            
        </div>
        
     
        </>
    )
}

export default InputStatus;
