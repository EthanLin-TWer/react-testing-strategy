import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const DonateButton = styled(Button)`
  color: indianred;
`

export const HomeComponent = () => (
  <>
    <p>welcome to the home page</p>
    <DonateButton>Donate</DonateButton>
  </>
)
