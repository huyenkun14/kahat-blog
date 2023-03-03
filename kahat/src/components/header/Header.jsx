import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="headerTitle">
            <span className='title1'>Blog</span>
            <span className='title2'>Kahat</span>
        </div>
        <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
    </div>
  )
}

export default Header