import React from 'react'
import { getTrailer, img_500 } from '../utils'
import { FaYoutube } from "react-icons/fa";
import { useEffect } from 'react';
import { useState } from 'react';

export const MyModal = ({isOpen,setIsOpen,media,type}) => {

    const [trailer, setTrailer] = useState([])

    useEffect(() => {
      getTrailer(media.media_type ? media.media_type : type,media.id).then(setTrailer)
      
    }, [])
    
    const getYoutube = trailer.find(obj => obj.site == "Youtube")


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
                <div className="modal-action flex justify-between items-center gap-2">

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
