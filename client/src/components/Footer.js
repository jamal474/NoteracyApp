import React from 'react'
import '../styles/Footer.css'
const Footer = (props) => {
    var d = new Date(); 
    const currentYear = d.getFullYear(); 
  return (
    <div className = {`${props.clname}`}>
        <div className  = "c">{currentYear}&copy;</div>
        <a href="http://mdshabbirjamal.one" className = "maker">MAKER</a>
        <a href="https://www.linkedin.com/in/md-shabbir-jamal-0620781a0/" className = "linkedin">LINKEDIN</a>
    </div>
  )
}

export default Footer