import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"

const Post = ({displayName,userName,verified,text,image,avatar}) => {
    
    return (
        <>
            <div className='post'>
                <div className='post-avatar'>
                    <Avatar src={avatar}/>
                </div>

                <div className='post-body'>
                    <div className='post-header'>
                        <div className='post-header-text'>
                            <h3>
                                <span className='post-displayName'>{displayName}{" "}</span>
                                <span className='verified-badge'>{verified && <i class="fas fa-certificate"></i>}</span>
                                <span className='post-userName'>{" "}@{userName}</span>
                            </h3>
                        </div>

                        <div className='post-headerDescription'>
                            <p>{text}</p>
                        </div>
                    </div>

                    <img src={image} alt="post"/>
                    
                    <div className='post-footer'>
                        <i class="far fa-comment-alt"></i>
                        <i class="fas fa-redo-alt"></i>
                        <i class="far fa-heart"></i>
                        <i class="far fa-share-square"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post
