import React from 'react'
import { getTrendings, img_300 } from '../utils'
import { useState } from 'react'
import { useEffect } from 'react'
import { MediaList } from '../components/MediaList'
import { Loading } from '../components/Loading'
import { Pagination } from '../components/Pagination'

export const Home = () => {

  const [Trendings, setTrendings] = useState(null)
  const [page, setPage] = useState(1)

  Trendings && console.log(Trendings)

  useEffect(() => {
    getTrendings(page).then(setTrendings)
  
  },[page])
  

  return (
    <div>
        {
          Trendings ? <MediaList data={Trendings} type='trending'/> : <Loading/>
        }
        <Pagination {...{page,setPage}}/>
    </div>
  )
}

