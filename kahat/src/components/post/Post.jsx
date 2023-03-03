import React from 'react'
import './Post.css'

const Post = () => {
  return (
    <div className='post'>
        <img src="https://www.travelassociates.com/sites/v2.travel-associates.com.au/files/fcl-blog/hanoi-hoankiem.jpg" alt="" />
        <div className="postInfo">
            <div className="postCards">
                <span>Music</span>
                <span>Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet</span>
            <hr />
            <span className="postDate">1h ago</span>
        </div>
        <p className="postContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iste eligendi eveniet accusamus quibusdam repellat praesentium distinctio rem inventore, 
            cumque excepturi necessitatibus fuga error soluta expedita quia voluptatum dignissimos veritatis animi.
        </p>
    </div>
  )
}

export default Post