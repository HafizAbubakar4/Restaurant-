import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Data from './data';
import firebaseFunctions from './firebaseFunctions';
import FetchLocalStorageData from './fetchLocalStorageData';

export default function Untils() {
  return (
    <>
      <Routes>
        <Route path='*' element={< Data/>} />
        <Route path='/fetchLocalStorageData' element={< FetchLocalStorageData/>} />
        <Route path='/firebaseFunctions' element={< FirebaseFunctions/>} />
        </Routes>  
    </>
  )
}
