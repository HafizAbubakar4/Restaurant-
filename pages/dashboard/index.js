import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

import ShowFoods from './ShowFoods'
// import { CreateContainer } from '../../Components'
import Product from './Product'

export default function index() {
    return (
        <Routes>
            <Route path='/' >
                <Route index element={<Home />} />
                <Route path='showFoods' element={<ShowFoods/>} />
                <Route path='Product' element={<Product/>} />


                {/* <Route path='/createItem' element={<CreateContainer />} /> */}

            </Route>
        </Routes>
    )
}
