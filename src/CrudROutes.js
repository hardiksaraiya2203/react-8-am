import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ParentForCrud from './ParentForCrud'
import { PCrudwithapi } from './PCrudwithapi'

export const CrudROutes = () => {
  return (
    <Routes>
        <Route path='/crud' element={<ParentForCrud></ParentForCrud>}/>
        <Route path='/crudwithapi' element={<PCrudwithapi></PCrudwithapi>}/>
    </Routes>
  )
}
