import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todolist from '../Components/to-do-list';

import Login from '../Components/Login';

const Router = () => (
  <Routes>
    <Route path="/" exact element={<Login />} />
    <Route path="/task" element={<Todolist />} />
  </Routes>
)

export default Router;