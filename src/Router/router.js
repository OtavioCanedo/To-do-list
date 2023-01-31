import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from '../Components/Login';

const Router = () => (
  <Routes>
    <Route path="/" exact element={<Login />} />
  </Routes>
)

export default Router;