import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loaded } from '../features/home/reducers'
import { HomeComponent } from '../features/home/HomeComponent'

export const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loaded())
  })

  return <HomeComponent />
}
