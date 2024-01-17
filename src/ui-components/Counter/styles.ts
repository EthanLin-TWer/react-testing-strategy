import { styled, TextField } from '@mui/material'

export const BorderlessCounter = styled(TextField)`
  & > div > fieldset {
    border-width: 0;
  }
`
