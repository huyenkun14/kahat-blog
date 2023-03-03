import React from 'react'
import './TopBar.css'
import { Link } from 'react-router-dom';

const topBar = () => {
  const user = false;
  return (
    <div className='top'>
      <div className="topSocial topSide">
        <a href="https://www.facebook.com/khanhhuyenhehe"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://github.com/huyenkun14"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.instagram.com/huyen_khanh_14/"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/khanhhuyenhehe"><i class="fa-brands fa-facebook-messenger"></i></a>
      </div>

      <div className="topMenu topCenter">
        <ul>
          <li className="topMenuItem">
            <Link className='link' to="/">HOME</Link>
          </li>
          <li className="topMenuItem">
            <Link className='link' to="/setting">ACCOUNT</Link>
          </li>
          <li className="topMenuItem">
            <Link className='link' to="write">WRITE</Link>
          </li>
          <li className="topMenuItem">
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className="topSearch topSide">
        {
          user ? (
            <>
              <img src="https://play-lh.googleusercontent.com/YAZ0PKf2M_Iyxdl1XgKCfGFjz0KUIwLRIy8EtM8jxRbsXx-5ZTx2Vbo1QN1vkVz7hGE" alt="" />
              <i class="fa-solid fa-magnifying-glass"></i>
            </>
          ) : (
            <div className="topMenu">
              <ul>
                <li className="topMenuItem"><Link className='link' to="/login">LOGIN</Link></li>
                <li className="topMenuItem"><Link className='link' to="/register">REGISTER</Link></li>
              </ul>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default topBar