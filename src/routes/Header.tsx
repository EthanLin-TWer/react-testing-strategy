import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { Outlet } from 'react-router-dom'
import { HeaderComponent } from '../components/shared/header/HeaderComponent'

export const Header = () => (
  <>
    <HeaderComponent />
    <Outlet />
  </>
)
