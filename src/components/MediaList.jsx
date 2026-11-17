import React from 'react'
import { MediaCard } from './MediaCard'
import { useState } from 'react'
import { useEffect } from 'react'
import { getVote } from '../utils'

 export const MediaList = ({data,type}) => {

  return (
    <div className='flex flex-wrap p-2 justify-center items-center'>
      {
        data && data.map(obj => <MediaCard key={obj.id} media = {obj}/>)
      }

    </div>
  )
}
