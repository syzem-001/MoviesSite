import React from 'react'
import { getCredits, getPersonCredits, getPersonDetails, getTrailer, img_500 } from '../utils'
import { FaYoutube } from "react-icons/fa";
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from './Carousel';

export const MyModal = ({isOpen,setIsOpen,media,type}) => {
    const [details, setDetails] = useState(null)
    const [trailer, setTrailer] = useState([])
    const [credits, setCredits] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
      let isCurrent = true
      setError('')

      if (type === 'actor') {
        getPersonDetails(media.id)
          .then(person => {
            if (isCurrent) setDetails(person)
          })
          .catch(() => {
            if (isCurrent) setError('Nem sikerült betölteni a személy adatait.')
          })
        getPersonCredits(media.id).then(results => {setCredits(results)})      
      } else {
        const mediaType = media.media_type || type
        getTrailer(mediaType, media.id)
          .then(results => {
            if (isCurrent) setTrailer(results)
          })
          .catch(() => {
            if (isCurrent) setError('Nem sikerült betölteni a média adatait.')
          })
        getCredits(mediaType, media.id)
          .then(results => {
            if (isCurrent) setCredits(results)
          })
          .catch(() => {
            if (isCurrent) setError('Nem sikerült betölteni a média adatait.')
          })    
      }

      return () => {
        isCurrent = false
      }
    }, [media.id, media.media_type, type])

    const person = details || media
    const imagePath = type === 'actor'
      ? person.profile_path
      : media.backdrop_path || media.poster_path

     console.log(credits);
      

  return (
    <div>
        <dialog className={`modal ${isOpen ? "modal-open " : ""}`}>
            <div className="modal-box">
                {imagePath && <img src={img_500 + imagePath} alt={person.name || media.title || ""} />}
                <h3 className="font-bold text-l flex flex-col justify-baseline items-center">
                    <span>{type === 'actor' ? person.name : media.original_title || media.original_name || media.title || media.name}</span>
                    {type !== 'actor' && <span>({media.first_air_date || media.release_date || ''})</span>}
                
                </h3>
                {type === 'actor' && details && (
                  <>
                    {person.known_for_department && <p>{person.known_for_department}</p>}
                    {person.birthday && <p>Született: {person.birthday}</p>}
                    {person.deathday && <p>Elhunyt: {person.deathday}</p>}
                    {person.place_of_birth && <p>{person.place_of_birth}</p>}
                  </>
                )}
                {type === 'actor' && !details && !error && <p className="py-4">Személyadatok betöltése...</p>}
                {error && <p className="py-4 text-error">{error}</p>}
                {(type === 'actor' ? person.biography : media.overview) && (
                  <p className="py-4">{type === 'actor' ? person.biography : media.overview}</p>
                )}

                <div>
                     {credits && <Carousel credits={credits.slice(0,8)}/>}
                </div>
               

                <div className="modal-action flex justify-between items-center gap-2 ">

                    {trailer.length > 0 && <a href={`https://youtube.com/watch?v=${trailer[0].key}`}target='_blank'><FaYoutube fontSize={30}/></a>} 
                    <form method="dialog">
                        <button className="btn" onClick={() => setIsOpen(false)}>Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    </div>
  )
}
