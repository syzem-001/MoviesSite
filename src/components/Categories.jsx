import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getCategories } from '../utils'

export const Categories = ({type,selectedCategories,setSelectedCategories}) => {
    const [categories, setCategories] = useState(null)

    useEffect(() => {
      getCategories(type).then(setCategories)

    }, [])
    
    categories && console.log('Categories: ',categories);

    const HandleChange = (id) => {
        setSelectedCategories(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev,id])
    } 

    
  return (
    <div className='flex flex-wrap justify-center items-center'>
        {
           categories && categories.map(obj => 
                <div className='gap-4 m-2'key={obj.id}>  
                    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-8 border p-2 text-white" >
                        <label className="label">
                            <input type="checkbox" className="checkbox" onChange={() => HandleChange(obj.id)} />
                            {obj.name}
                        </label>
                    </fieldset>
                </div>
              
           )
        }
    </div>
  )
}
