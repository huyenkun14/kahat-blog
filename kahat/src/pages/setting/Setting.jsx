import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './Setting.css'

const Setting = () => {
    return (
        <div className='setting'>
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Accout</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img src="https://www.travelassociates.com/sites/v2.travel-associates.com.au/files/fcl-blog/hanoi-hoankiem.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i class="fa-solid fa-image"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Kahat' />
                    <label>E-mail</label>
                    <input type="mail" placeholder='kahat@gmail.com' />
                    <label>Password</label>
                    <input type="password" placeholder='********' />
                    <button>Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Setting