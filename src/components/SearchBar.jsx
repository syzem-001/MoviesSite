import React from 'react'
import { getMedia } from '../utils'

export const SearchBar = ({HandelSearch,searchText , setsearchText}) => {
    

  return (
    <div className='flex justify-center p-4 text-gray-600 bg-gray-700 shadow-md rounded-md'>
        <label className="input">
        <svg className="h-[1em] opacity-50 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24 " >
            <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
            >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
            </g>
        </svg>
        <input type="search" required placeholder="Search" className='text-white' value={searchText}
         onChange={(e) => setsearchText(e.target.value)}/>
        </label> 
        <button className="btn" onClick={HandelSearch}>Search</button>
    </div>
   
  )
}
