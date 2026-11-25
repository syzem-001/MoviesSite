import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300 } from '../utils';

import AliceCarouselImport from 'react-alice-carousel';
const AliceCarousel = AliceCarouselImport.default ?? AliceCarouselImport

const handleDragStart = (e) => e.preventDefault();



export const Carousel = ({credits}) => {

    const items = credits.map(obj => 
        <div className='flex flex-col justify-center items-center gap-5' key={obj.id}>
            <img src={obj.profile_path ? img_300+obj.profile_path : "noImage.jpg" || obj.backdrop_path ? img_300+obj.backdrop_path : "noImage.jpg"} alt={obj.name} className='p-1 w-full h-40 object-contain ' />
            <p className='text-[15px] p-1'>{obj.name || obj.title}</p>
        </div>
    )

    return (

          <AliceCarousel mouseTracking items={items} 
    responsive={
        {
            0: {items: 2},
            600: {items: 3},
            1024: {items:4}
        }
    } 
    controlsStrategy="alternate"
    />
    )
}
