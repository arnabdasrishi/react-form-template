import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DataList from '../components/DataList'
import Form from '../components/Form'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Form />}/>
        <Route path="/datalist" element={<DataList />}/>
    </Routes>
  )
}

export default AllRoutes