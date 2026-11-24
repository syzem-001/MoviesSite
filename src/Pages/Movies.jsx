import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getMovies, getSelectedMediaByCateg } from '../utils'
import { Loading } from '../components/Loading'
import { MediaList } from '../components/MediaList'
import { Categories } from '../components/Categories'
import { Pagination } from '../components/Pagination'

export const Movies = () => {
  const [page, setPage] = useState(1)
  const [Movies, setMovies] = useState(null)
  const [selectedCategories, setSelectedCategories] = useState([])

  useEffect(() => {
      getSelectedMediaByCateg('movie',selectedCategories.join(','),page).then(setMovies)
    
  },[page])
    
  useEffect(() => {
    setPage(1)
    getSelectedMediaByCateg('movie',selectedCategories.join(','),page).then(setMovies)
  },[selectedCategories.join(',')])
        
  

    console.log(selectedCategories);

  return (
    <div>
        <Categories type='movie' {...{selectedCategories,setSelectedCategories}}/> 
        {

          Movies ? <MediaList data={Movies} type='movie'/> : <Loading/>
        }
        <Pagination {...{page,setPage}}/>
      </div>
  )
}
