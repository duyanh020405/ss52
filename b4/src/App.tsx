import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes ,Route, Outlet} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Open from './pages/Open'
import Price from './pages/Price'
import Service from './pages/Service'
import Team from './pages/Team'
import Testimonial from './pages/Testimonial'

export default function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Routes>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
        <Route path='/open' element={<Open></Open>}></Route>
        <Route path='/price' element={<Price></Price>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/team' element={<Team/>}></Route>
        <Route path='/t' element={<Testimonial></Testimonial>}></Route>     
      </Routes>
      <Footer></Footer>

    </>
  )
}
