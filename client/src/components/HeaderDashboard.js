import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/HeaderDashboard.css'
import BASE_URL from '../helper'

const HeaderDashboard = () => {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState("");

  const handleSearch = (e) => {
    navigate(`/api/v1/dashboard/search/${query}`);
  }
  return (
    <div className="headerDashboard">
      <a href="/dashboard" ><h1 className="logo">Noteracy</h1></a>
      <div className="search-bar">
        <form role="search" onSubmit={handleSearch}>
          <input className="search-input" type="search" name="searchTerm" value={query} onChange={(e) => { setQuery(e.target.value)}} placeholder="Search..." aria-label="Search" required />
        </form>
      </div>

      <div className="logout-actions">
        <a href= {`${BASE_URL}/logout`} className="logout">Log Out</a>
      </div>
    </div>
  )
}

export default HeaderDashboard;