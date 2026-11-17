import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getTVshows } from '../utils'
import { Loading } from '../components/Loading'
import { MediaList } from '../components/MediaList'

export const TvShows = () => {
  const [TVshows, setTVshows] = useState(null)

  useEffect(() => {
    getTVshows().then(setTVshows)
  }, [])
  

  return (
    <div>
      {
        TVshows ? <MediaList data={TVshows} type='tvshow'/> : <Loading/>
      }
    </div>
  )
}
