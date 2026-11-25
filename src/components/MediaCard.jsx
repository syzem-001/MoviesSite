import React from 'react'
import { getVote, img_300 } from '../utils'
import { useState } from 'react'
import { MyModal } from './MyModal'

export const MediaCard = ({media,type}) => {
  const [index, setindex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const novel  = () => {
    setindex(index + 1)
    return index
  }

  return (
    <>
       <div className="card bg-base-100 w-96 shadow-sm p-4 m-4 h-150" onClick={()=> setIsOpen(true)}>
        <figure>
          <img className='object-cover'
            src={media.poster_path || media.profile_path ? img_300 + (media.poster_path || media.profile_path) : 'noImage.jpg'}
            alt={media.title || media.name || media.original_name} />
        </figure>
        <div className="card-body">
          <div className='flex justify-center items-center'>
             <h2 className="card-title font-bold text-shadow-2xs text-2xl">{media.title || media.name}</h2>
          </div>
          <div className='flex flex-col items-center'>
              <p>{media.media_type || media.known_for_department}</p>
              <p className='text-end'>{media.release_date || media.first_air_date || media.known_for?.[0]?.title || "" }</p>
          </div>
          <div className='flex items-center justify-center'>
            <div className="rating">
              {type == 'actor' ? Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  className="mask mask-star bg-yellow-400"
                  aria-label={`${i} star`}
                  aria-current={
                    i + 1 === Math.round((media.popularity) / 10)
                      ? "true"
                      : undefined
                  }

                />

              )):
                Array.from({ length: 10 }, (_, i) => (
                <div
                  key={i}
                  className="mask mask-star bg-yellow-400"
                  aria-label={`${i +1 } star`}
                  aria-current={
                    i + 1 === getVote(media)
                      ? "true"
                      : undefined
                  }

                />

              ))}
            </div>
          </div>
        </div>
      </div>
      {isOpen && <MyModal {...{isOpen,setIsOpen,media,type}}/> }
    </>
     
  )
}
