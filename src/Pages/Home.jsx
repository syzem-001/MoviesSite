import React from 'react'
import { getTrendings, img_300 } from '../utils'
import { useState } from 'react'
import { useEffect } from 'react'
import { MediaList } from '../components/MediaList'
import { Loading } from '../components/Loading'

export const Home = () => {

  const [Trendings, setTrendings] = useState(null)

  Trendings && console.log(Trendings)

  useEffect(() => {
    getTrendings().then(setTrendings)
  
  },[])
  

  return (
    <div>
        {
          Trendings ? <MediaList data={Trendings} type='trending'/> : <Loading/>
        }
    </div>
  )
}

