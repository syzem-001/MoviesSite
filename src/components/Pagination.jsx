import React from 'react'

export const Pagination = ({page,setPage,maxPage=10}) => {
    const num = [...Array(maxPage > 10 ? 10 : maxPage )].map((_,i)=> i+1)
  return (
    <div className='flex justify-center items-center p-4'>
        <div className="join">
        {num.map(nr=> 

            <button className={nr == page ? "join-item btn btn-active" : "join-item btn"} key={nr} onClick={() => setPage(nr)}>{nr}</button>
        )}


        </div>
    </div>
    
  )
}
