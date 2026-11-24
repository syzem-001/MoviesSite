import React from 'react'

export const Filter = ({Type,setType}) => {
  return (
    <div className='flex justify-center gap-4 p-2 text-white bg-gray-700 shadow-md rounded-md mb-[30px]'>
        <label className='flex flex-col justify-center items-center p-2'>
            <input type="radio" name="radio-10" value="movie" className="radio radio-error" checked={Type == 'movie'}
            onChange={(e) => setType(e.target.value)}
            />
            Movies
        </label>
        <label className='flex flex-col justify-center items-center p-2'>
            <input type="radio" name="radio-10" value="tv" className="radio radio-error" checked={Type == 'tv'}
            onChange={(e) => setType(e.target.value)}
            />
            TV Shows
        </label>
    </div>
  )
}
