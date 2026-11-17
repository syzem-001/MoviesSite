import React from 'react'
import { getTrendings, img_300 } from '../utils'
import { useState } from 'react'
import { useEffect } from 'react'

export const Home = () => {

  const [Trendings, setTrendings] = useState(null)

  Trendings && console.log(Trendings)

  useEffect(() => {
    getTrendings().then(setTrendings)
  
  },[])
  

  return (
    <div>
      {
        Trendings && Trendings.map(obj => 
          <img src={img_300+obj.poster_path} alt="kép" key={obj.id}/>
        )
      }
    </div>
  )
}

