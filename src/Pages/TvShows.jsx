import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getSelectedMediaByCateg, getTVshows } from '../utils'
import { Loading } from '../components/Loading'
import { MediaList } from '../components/MediaList'
import { Categories } from '../components/Categories'
import { Pagination } from '../components/Pagination'

export const TvShows = () => {
  const [page, setPage] = useState(1)
  const [TVshows, setTVshows] = useState(null)
  const [selectedCategories, setSelectedCategories] = useState([])
  
    useEffect(() => {
        setPage(1)
        getSelectedMediaByCateg('tv',selectedCategories.join(','),page).then(setTVshows)
    },[selectedCategories.join(',')])
      


    useEffect(() => {
       getSelectedMediaByCateg('tv',selectedCategories.join(','),page).then(setTVshows)
    }, [page])
    
      console.log(selectedCategories);

  return (
    <div>
         <Categories type='tv' {...{selectedCategories,setSelectedCategories}}/> 
      {
        TVshows ? <MediaList data={TVshows} type='tv'/> : <Loading/>
      }
        <Pagination {...{page,setPage}}/>
    </div>
  )
}
