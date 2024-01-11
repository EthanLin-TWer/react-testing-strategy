import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loaded } from '../components/home/reducers'
import { HomeComponent } from '../components/home/HomeComponent'

export const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loaded())
  })

  return <HomeComponent />
}
