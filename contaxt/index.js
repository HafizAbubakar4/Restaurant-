import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Reducer from './Reducer'
import InitialState from './initialState'
import { StateProvider } from './StateProvider'


export default function Contaxt() {
  return (
    <>
<Routes>
    <Route path='*' element={< Reducer/>} />
    <Route path='/StateProvider' element={< StateProvider/>} />
    <Route path='/InitialState' element={< InitialState/>} />
</Routes>
    </>
  )
}
