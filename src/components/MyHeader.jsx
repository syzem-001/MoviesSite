import React from 'react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import { FiAlignJustify } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

export const MyHeader = () => {
  const [menuOpen,setMenuOpen] = useState(false)

  const navlinkClass = ({isActive}) => `transition-colors ${isActive ? "text-red-500 text-2xl font-semibold" : "hover:text-red-300"}`



  return (
    <div>


      <header>
        <nav>

          <div className='flex items-center justify-between p-2 bg-black text-white'>
             <div className='text-3xl font-bold'>
                ASD<span className='text-red-500'>Flix</span> 
              </div>
            
              <div className='hidden min-[580px]:flex items-center justify-end gap-4 p-2 m-5 w-full'>
                <NavLink to='/'  className={navlinkClass}>Kezdőlap</NavLink> 
                <NavLink to='/movies' className={navlinkClass}>Movies</NavLink>  
                <NavLink to='/tv'   className={navlinkClass}>TV</NavLink>  
                <NavLink to='/search'   className={navlinkClass}>Keresés</NavLink>
                <NavLink to='/Actors'   className={navlinkClass}>Színészek</NavLink>      
              </div>


                 {/*HAmbörbő menu*/}

                  <button onClick={() => setMenuOpen(!menuOpen)} className='min-[580px]:hidden text-3xl'>
                      {!menuOpen ? <FiAlignJustify /> : <MdOutlineClose />}
                  </button>
              
          </div>
        
          {
            menuOpen &&
            (
              <div className='flex flex-col justify-evenly items-center gap-4 bg-black hidden:min-[581px]'>
                <NavLink to='/'  className={navlinkClass}>Kezdőlap</NavLink> 
                <NavLink to='/movies' className={navlinkClass}>Movies</NavLink>  
                <NavLink to='/tv'   className={navlinkClass}>TV</NavLink>  
                <NavLink to='/search'   className={navlinkClass}>Keresés</NavLink>   
                <NavLink to='/Actors'   className={navlinkClass}>Színészek</NavLink> 
              </div>
            )
          }

        </nav>
      </header>

      <main className='p-4'>
        <Outlet/>
      </main>
    </div>
  )
}
