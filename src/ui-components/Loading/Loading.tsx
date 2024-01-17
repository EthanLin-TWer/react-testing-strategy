import { Box, CircularProgress, circularProgressClasses, styled } from '@mui/material'
import React from 'react'

const StyledBox = styled(Box)`
  position: relative;
  overflow: hidden;
  width: 40px;
  height: 40px;
`

const StyledDeterminateProgress = styled(CircularProgress)(() => ({
  width: '40px',
  height: '40px',

  position: 'absolute',
  animationDuration: '1200ms',
  left: '0px',
  [`& .${circularProgressClasses.circle}`]: {
    strokeLinecap: 'round',
  },

  [`& .${circularProgressClasses.circleDeterminate}`]: {
    color: '#F5F6F7',
    opacity: '64%',
  },

  [`& .${circularProgressClasses.circleIndeterminate}`]: {
    color: 'primary',
  },
}))

export const Loading = () => {
  return (
    <StyledBox>
      <StyledDeterminateProgress variant="determinate" thinkness={4} value={100} />
      <StyledDeterminateProgress variant="indeterminate" thinkness={4} value={25} />
    </StyledBox>
  )
}
