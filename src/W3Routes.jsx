import React from 'react'
import {Routes,Route}  from 'react-router-dom'
import W3CSS from './W3CSS'
import W3JS from './W3JS'
// import w3Html from './W3HTML'

const W3Routes = () => {
  return (
        <Routes>
            {/* <Route path='/' element={<w3Html/>}/> */}
            <Route path='/W3CSS' element={<W3CSS/>}/>
            <Route path='/W3JS' element={<W3JS/>}/>
        </Routes>
  )
}

export default W3Routes
