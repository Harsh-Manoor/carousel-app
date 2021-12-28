import React, {useState, useEffect} from 'react'
import './Feed.css'
import TweetBox from '../TweetBox/TweetBox'
import Post from '../Post/Post'
import database from '../Firebase/Firebase'

const Feed = () => {
    
    const [posts, setposts] = useState([]);

    useEffect(()=>{
        database.collection('posts').onSnapshot(snapshot => {
            setposts(snapshot.docs.map(doc=>doc.data()))
        })
    },[])

    
    return (
        <>
            <div className="feed">
                {/* Header */}
                <div className="feed--header">
                  <h2>Home</h2>
                </div>

                {/* Tweet Box */}
                <TweetBox />

                {posts.map((p) => (
                    <Post 
                        displayName={p.displayName}
                        userName={p.userName}
                        text={p.text}
                        verified={p.verified}
                        avatar={p.avatar}
                        image={p.image}

                    />
                ))}


            </div>
        </>
    )
}

export default Feed
