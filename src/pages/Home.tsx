import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loaded } from '../features/home/reducers'

const DonateButton = styled(Button)`
  color: indianred;
`

export const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loaded())
  })

  return (
    <div>
      <p>welcome to the home page</p>
      <DonateButton>Donate</DonateButton>
    </div>
  )
}
