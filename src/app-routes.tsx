import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Root } from './pages/Root'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
