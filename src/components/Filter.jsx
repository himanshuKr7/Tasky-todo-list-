import React from 'react'

const Filter = ({}) => {
  return (
    <div>
       <div className='flex justify-around my-8'>
        <select name="" id="status" className='py-1 px-2 rounded-md'>
          <option value="All">All</option>
          <option value="Incomplete">Incomplete</option>
          <option value="Completed">Completed</option>
        </select>
        <h2 className='font-bold text-2xl  text-blue-500'>Your Todos</h2>
        <input type="text"  className='py-1 px-5 rounded-lg outline-none'  placeholder='Search Your Todo'/>
      </div>
    </div>
  )
}

export default Filter
