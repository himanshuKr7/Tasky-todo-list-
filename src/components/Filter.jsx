import React from 'react'
import "./Filter.css";
const Filter = ({filter,setFilter,search,setSearch}) => {
  const handleFilterChange = (e) =>
  {
    setFilter(e.target.value);
  }
  const handleSearchChange = (e) =>
  {
    setSearch(e.target.value);
  }
  return (
       <div className='filter-div'>
        <select name="" id="status" className='status' value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="completed">Completed</option>
        </select>
        <input type="text"  className='tasksearch'  placeholder='Search Todo' value={search} onChange={handleSearchChange}/>
      </div>
  )
}

export default Filter
