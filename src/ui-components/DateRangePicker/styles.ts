import { styled, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'

export const Container = styled('div')`
  position: relative;
  padding-top: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const StyledStartPicker = styled(DatePicker)`
  & > div > fieldset {
    border-width: 0;
  }

  margin-right: 60px;
`

export const StyledEndPicker = styled(DatePicker)`
  & > div > fieldset {
    border-width: 0;
  }

  margin-left: 60px;
`

export const DurationDisplay = styled(Typography)`
  position: absolute;
  left: 47.5%;
  color: #555;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 14px;

    background-color: #dadfe6;
  }

  &::before {
    top: 15px;
    left: -25px;
  }

  &::after {
    top: 15px;
    left: 40px;
  }
`
