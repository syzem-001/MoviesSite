import React from 'react'
import { getVote, img_300 } from '../utils'

export const MediaCard = ({media}) => {
  return (
      <div className="card bg-base-100 w-96 shadow-sm p-4 m-4 h-150">
        <figure>
          <img className='object-cover'
            src={img_300+media.poster_path}
            alt={media.title || media.name} />
        </figure>
        <div className="card-body">
          <div className='flex justify-center items-center'>
             <h2 className="card-title font-bold text-shadow-2xs text-2xl">{media.title || media.name}</h2>
          </div>
          <div className='flex items-center justify-between'>
              <p>{media.media_type}</p>
              <p className='text-end'>{media.release_date || media.first_air_date}</p>
          </div>
          <div>
              {"⭐".repeat(getVote(media))}
          </div>
         
        </div>
      </div>
  )
}

