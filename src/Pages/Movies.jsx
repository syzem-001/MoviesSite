import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getMovies } from '../utils'
import { Loading } from '../components/Loading'
import { MediaList } from '../components/MediaList'

export const Movies = () => {

  const [Movies, setMovies] = useState(null)

  useEffect(() => {
      getMovies().then(setMovies)
    
  },[])
    

  return (
    <div>
        {
          Movies ? <MediaList data={Movies} type='movies'/> : <Loading/>
        }
      </div>
  )
}
