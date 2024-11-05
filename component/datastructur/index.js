import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import CartContainer from './CartContainer'
import CartitemContainer from './CartitemContainer'
import CheckoutCart from './CheckoutCart'
import CreateContainer from './CreateContainer'
import HomeContainer from '../data/HomeContainer'
import Loader from './Loader'
import MainContainer from './MainContainer'
import MenuContainer from './MenuContainer'
import RowContainer from './RowContainer'
import TopFooter from './TopFooter'

export default function datastructur() {
  return (
    <>
<Routes>
    <Route path='*' element={< Header/>} />
    <Route path='/CartContainer' element={< CartContainer/>} />
    <Route path='/CartitemContainer' element={< CartitemContainer/>} />
    <Route path='/CheckoutCart' element={< CheckoutCart/>} />
    <Route path='/CreateContainer' element={< CreateContainer/>} />
    <Route path='/HomeContainer' element={< HomeContainer/>} />
    <Route path='/Loader' element={< Loader/>} />
    <Route path='/MainContainer' element={< MainContainer/>} />
    <Route path='/MenuContainer' element={< MenuContainer/>} />
    <Route path='/RowContainer' element={< RowContainer/>} />
    <Route path='/TopFooter' element={< TopFooter/>} />
</Routes>
    </>
  )
}





