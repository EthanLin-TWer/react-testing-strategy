import React from 'react'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'

import { HotelSearch } from './routes/HotelSearch'
import { HotelList } from './routes/HotelList'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export const Header = () => (
  <>
    <Outlet />
  </>
)

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HotelSearch />} />
        <Route path="hotels/list" element={<HotelList />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
