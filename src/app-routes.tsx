import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from './routes/Header'
import { HotelSearch } from './routes/HotelSearch'
import { HotelList } from './routes/HotelList'
import { About } from './routes/About'
import { Contact } from './routes/Contact'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HotelSearch />} />
        <Route path="hotels/list" element={<HotelList />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
