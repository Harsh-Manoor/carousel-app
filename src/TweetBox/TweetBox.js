import React from 'react'
import "./TweetBox.css"
import { Avatar, Button } from '@mui/material'

const TweetBox = () => {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox--input'>
                    <Avatar />
                    <input placeholder='What is happening?' type='text' />  
                </div>
                <div className='tweetBox-button'>
                    <Button variant='contained' className='tweetBox-tweet_button'>Tweet</Button>
                </div>
            </form>
        </div>
    )
}

export default TweetBox
