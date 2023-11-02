import React from 'react'
import Header from '../components/Header'
import '../styles/Landing.css'
import Footer from '../components/Footer'
import BASE_URL from '../helper'
import SEO from '../components/SEO'

const Landing = () => {
    return (
        <div className="Landing">
            <SEO
                title=" Noteracy - Your Personal Note-Taking and Organization Tool"
                description="Noteracy: Your connected workspace for taking, managing, and organizing notes. Write your thoughts as they come to you, create, update, delete, and search notes effortlessly. A versatile note-taking solution for all your ideas and tasks"
                name="@lamajribbahs"
                image="../assets/icons/icon96.ico" />
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