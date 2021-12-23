import React from 'react'
import './Feed.css'
import TweetBox from '../TweetBox/TweetBox'

const Feed = () => {
    return (
        <>
            <div className="feed">
                {/* Header */}
                <div className="feed--header">
                  <h2>Home</h2>
                </div>

                {/* Tweet Box */}
                <TweetBox />

            </div>
        </>
    )
}

export default Feed
