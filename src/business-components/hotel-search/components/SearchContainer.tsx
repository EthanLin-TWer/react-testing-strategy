import React, { FC, ReactNode } from 'react'
import { styled, Typography } from '@mui/material'

interface Props {
  label: string
  children: ReactNode
}

const Container = styled('div')`
  margin: 10px;
  padding: 30px;

  border: 1px solid transparent;
  border-radius: 8px;

  background: linear-gradient(135deg, #3c96f5, #ecf5fe);
`

const Label = styled(Typography)`
  color: white;
  margin-bottom: 30px;
`

export const SearchContainer: FC<Props> = ({ label, children }) => {
  return (
    <Container>
      <Label variant="h5">{label}</Label>

      {children}
    </Container>
  )
}
