import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/HeaderDashboard.css'
import BASE_URL from '../helper'

const HeaderDashboard = (props) => {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState("");

  const handleSearch = (e) => {
    navigate(`/dashboard/search/${query}`);
  }
  return (
    <div className="headerDashboard">
      <a href="/dashboard" ><h1 className="logo">Noteracy</h1></a>
      <div className="search-bar">
        <form role="search" onSubmit={handleSearch}>
          <input className="search-input" type="search" name="searchTerm" value={query} onChange={(e) => { setQuery(e.target.value)}} placeholder="Search..." aria-label="Search" required />
        </form>
      </div>

      <ul className = "ProfileDropdown">
        <li>
          <img className = "ProfileImage"  src = {props.profileUrl}/>
          <ul className = "dropdown">
              <li><a href= {`${BASE_URL}/logout`} className="logout">Log Out</a></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default HeaderDashboard;