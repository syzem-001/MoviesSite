import React from 'react'
import { getPerson, getPopularPeople } from '../utils';
import { MediaList } from '../components/MediaList';
import { useState } from 'react';
import { useEffect } from 'react';
import { Pagination } from '../components/Pagination';
import { SearchBar } from '../components/SearchBar';

export const Actors = () => {
  const [searchText, setsearchText] = useState('')
  const [page, setPage] = useState(1)
  const [pop_acters, setPop_acters] = useState(null)
  const [maxPage, setMaxPage] = useState(1)

       const HandelSearch = () => {
          setPop_acters(null)
          if(searchText.trim().length == 0) return
          console.log(searchText, "HandelSearch");
          
            getPerson(searchText,page).then((data)=> {
              setPop_acters(data.results)
              setMaxPage(data.total_pages)
              setPage(1)
          })
      }


  
  useEffect(() => {
      getPopularPeople(page).then(setPop_acters)
  
  }, [page])
  
  console.log(pop_acters);

  return (
    <div className=' flex flex-col justify-center items-center'>
        <div className='min-h-screen flex flex-col justify-center items-center'>
    
          <SearchBar searchText={searchText} setsearchText={setsearchText} HandelSearch={HandelSearch}/>
          {pop_acters && pop_acters.length > 0 &&
            <div>
                  <MediaList data={pop_acters} type='actor'/>
                  <Pagination {...{page,setPage,maxPage}}/>
            </div>
          }
        </div>  
    </div>
  )
}
