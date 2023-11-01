import React, { useEffect } from 'react'
import '../styles/Unauth.css'
import unauthDoodle from '../assets/images/unauth.svg'

const Unauth = () => {
  
  const [isLoading, setIsLoading] = React.useState(true);

  // Simulate a delay using useEffect
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the desired delay
    }, 800); // Adjust the delay time (2000 milliseconds or 2 seconds in this example)
  }, []);

  if (isLoading) 
  {
    return 
    <div>

    </div>
  } 
  else 
  {
  return (
    <div className = "Unauth">
        <img src = {unauthDoodle} alt = "401 doodle" className = "unauth-pic"></img>
        <h2 className = "unauth-401">401 : Unauthorised</h2>
        <h4 className = "unauth-msg">Please <a href = "/auth/google" className = "unauth-link">Login</a> to View</h4>
    </div>
  )
}
}

export default Unauth