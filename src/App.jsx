
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Description from './Pages/Description'


function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/description' element={<Description/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
