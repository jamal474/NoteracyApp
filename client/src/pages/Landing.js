import React from 'react'
import Header from '../components/Header'
import '../styles/Landing.css'
import Footer from '../components/Footer'
import BASE_URL from '../helper'

const Landing = () => {
    return (
        <div className="Landing">
            <Header />
            <div className="Landing-body">
                <h1 className = "bd-1">write your thoughts as they come to you</h1>
                <p className = "bd-2">Noteracy is simple to use</p>
                <a href={`${BASE_URL}/auth/google`} className = "signin">Try Noteracy, its Free</a>
            </div>
            <Footer clname = {"footerd"}/>
        </div>
    )
}

export default Landing