import React, { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ROUTES from './routes/routes'
import MainContext from './context/context'
import {axios} from axios

const App = () => {
  const [data, setData] = useState([])

  const routes = createBrowserRouter(ROUTES)

  useEffect(()=>{
    axios.get('http://localhost:8080/api/blogs')
    .then(res=>{
      console.log(res);
    })
  }, [])

  const contextData = {
    data, setData
  };

  return (
    <div>
      <MainContext.Provider value={contextData}>
        <RouterProvider router={routes} />
      </MainContext.Provider>
    </div>
  )
}

export default App
