import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import {MyHeader} from './components/MyHeader'
import { Home } from './Pages/Home'
import { Movies } from './Pages/Movies'
import { TvShows } from './Pages/TvShows'
import { SearchMedia } from './Pages/SearchMedia'
import { NotFound } from './Pages/NotFound'
import { Actors } from './Pages/Actors'

const myrouter = createBrowserRouter([
    {
      element:<MyHeader/>,
      children:[
        {path:'/',
          element:<Home/>
        },
        {
          path:'/movies',
          element:<Movies/>
        },
        {
          path:'/tv',
          element:<TvShows/>
        },
        {
          path:'/search',
          element:<SearchMedia/>
        },
        {
          path:'*',
          element:<NotFound/> 
        },
        {
          path:'/Actors',
          element:<Actors/>
        }

      ]
    }
  ])

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={myrouter}/>
  )
  
} 
export default App
