import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://i.pinimg.com/originals/49/b0/87/49b087b20bf74de8887555563749f0b6.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat distinctio voluptate consequuntur rem earum quia maxime, voluptates porro eos.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li>Life</li>
                    <li>Music</li>
                    <li>Style</li>
                    <li>Sport</li>
                    <li>Tech</li>
                    <li>Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <a href="https://www.facebook.com/khanhhuyenhehe"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://github.com/huyenkun14"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/huyen_khanh_14/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/khanhhuyenhehe"><i class="fa-brands fa-facebook-messenger"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar