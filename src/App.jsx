
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Description from './Pages/Description'
import NotFound from './Pages/NotFound'
import Buy from './Pages/Buy'
import Confirm from './Pages/Confirm'


function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/description' element={<Description/>}/>
        <Route path='/buy'  element={<Buy/>}/>
        <Route path='/confirm' element={<Confirm/>}/>
        <Route path='*'  element={<NotFound/>}/>
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
