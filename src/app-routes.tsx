import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from './routes/Header'
import { Home } from './routes/Home'
import { About } from './routes/About'
import { Contact } from './routes/Contact'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
