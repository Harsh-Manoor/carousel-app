import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"

const Post = ({displayName,userName,verified,timestamp,text,image,avatar}) => {
    return (
        <>
            <div className='post'>
                <div className='post-avatar'>
                    <Avatar />
                </div>

                <div className='post-body'>
                    <div className='post-header'>
                        <div className='post-header-text'>
                            <h3>Harsh{" "} <span className='verified-badge'><i class="fas fa-certificate"></i></span> @UserName</h3>
                        </div>

                        <div className='post-headerDescription'>
                            <p>Lorum Ipsum hello world</p>
                        </div>
                    </div>

                    <img src="https://media.giphy.com/media/Lq5r6qXmb5RUIZGbT0/giphy.gif" alt="post"/>
                    
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
