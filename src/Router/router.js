import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todoapp from '../Pages/Todoapp';

import Login from '../Pages/Login';

const Router = () => (
  <Routes>
    <Route path="/" exact element={<Login />} />
    <Route path="/task" element={<Todoapp />} />
  </Routes>
)

export default Router;