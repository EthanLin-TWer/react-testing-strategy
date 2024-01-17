import { Autocomplete, styled } from '@mui/material'

export const BorderlessAutocomplete = styled(Autocomplete)`
  padding-top: 10px;

  & > div > div > fieldset {
    border-width: 0;
  }
`
