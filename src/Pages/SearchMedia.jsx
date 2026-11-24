import React from 'react'
import { useState } from 'react'
import { Filter } from '../components/Filter'
import { SearchBar } from '../components/SearchBar'
import { MediaList } from '../components/MediaList'
import { getMedia } from '../utils'
import { Pagination } from '../components/Pagination'
import { useEffect } from 'react'

export const SearchMedia = () => {
  const [Type, setType] = useState('movie')
  const [searchText, setsearchText] = useState('')
  const [Media, setMedia] = useState(null)
  const [maxPage, setMaxPage] = useState(1)
  const [page, setPage] = useState(1)

   const HandelSearch = () => {
      setMedia(null)
      if(searchText.trim().length == 0) return
      console.log(Type,searchText, "HandelSearch");
      
        getMedia(Type,searchText,page).then((data)=> {
          setMedia(data.results)
          setMaxPage(data.total_pages)
          setPage(1)
      })
  }

  useEffect(() => {
      getMedia(Type,searchText,page).then((data)=> {
        setMedia(data.results)
      })
  }, [page])

  console.log(Type, searchText)

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <Filter Type={Type} setType={setType}/>

      <SearchBar searchText={searchText} setsearchText={setsearchText} HandelSearch={HandelSearch}/>
      {Media && Media.length > 0 &&
        <div>
              <MediaList data={Media} type={Type}/>
              <Pagination {...{page,setPage,maxPage}}/>
        </div>
      }

    </div>
  )
}
