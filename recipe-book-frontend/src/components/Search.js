import React from 'react'

const Search = (props) => {
    return (
      <>
      <form className="search" action="">
        <input type="search" 
                placeholder="Search Recipes"
                onChange={(event)=> props.handleSearch(event.target.value)}
        />
         <button className="search-btn" type="submit">Search</button>
      </form>
      </>
)}

export default Search 