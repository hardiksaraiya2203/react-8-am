import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ParentForCrud from './ParentForCrud'

export const CrudROutes = () => {
  return (
    <Routes>
        <Route path='/crud' element={<ParentForCrud></ParentForCrud>}/>
    </Routes>
  )
}
