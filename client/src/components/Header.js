import '../styles/Header.css'
import React from 'react'
import { Link } from 'react-router-dom'
import BASE_URL from '../helper';

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo"><Link to="/">Noteracy</Link></h1>
      <div className="sign-actions">
        <a href={`${BASE_URL}/auth/google`} type="button" className="signup">Sign Up</a>
        <a href={`${BASE_URL}/auth/google`} type="button" className="signin">Sign In</a>
      </div>
    </div>
  )
}

export default Header;