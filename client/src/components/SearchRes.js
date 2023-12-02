import React from 'react'
import { Link } from 'react-router-dom'

const SearchRes = (props) => {
  return (
    <div className="searchList">
      <Link to={`/dashboard/viewNote/${props.id}`}>
        <h2 className="result-topic">{props.title}</h2>
      </Link>
    </div>
  )
}

export default SearchRes