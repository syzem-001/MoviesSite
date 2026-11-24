import React from 'react'
import { getCredits, getTrailer, img_500 } from '../utils'
import { FaYoutube } from "react-icons/fa";
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from './Carousel';

export const MyModal = ({isOpen,setIsOpen,media,type}) => {

    const [trailer, setTrailer] = useState([])
    const [credits, setCredits] = useState(null)

    useEffect(() => {
      getTrailer(media.media_type ? media.media_type : type,media.id).then(setTrailer)
      getCredits(media.media_type || type,media.id).then(setCredits)
    }, [])
    
    credits && console.log(credits)

console.log(trailer);
    

  return (
    <div>
        <dialog className={`modal ${isOpen ? "modal-open " : ""}`}>
            <div className="modal-box">
                <img src={img_500+media.backdrop_path} alt={media.title} />
                <h3 className="font-bold text-l flex flex-col justify-baseline items-center">
                    <span>{media.original_title || media.original_name}</span>
                    <span>({media.first_air_date || media.release_date})</span>
                </h3>
                <p className="py-4">{media.overview}</p>

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
