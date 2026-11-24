import React from 'react'
import { MediaCard } from './MediaCard'
import { useState } from 'react'
import { useEffect } from 'react'
import { getTitle } from '../utils'


 export const MediaList = ({data,type}) => {

  return (
    <div>
        <h2 className='text-center font-bold text-gray-300 p-2 text-2xl'>{getTitle(type)}</h2>
        <div className='flex flex-wrap p-2 justify-center items-center'>

          {
            data && data.map(obj => <MediaCard key={obj.id} media = {obj} type={type}/>)
          }

        </div>
    </div>
  
  )
}
