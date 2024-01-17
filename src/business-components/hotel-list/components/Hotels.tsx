import { FC } from 'react'
import { styled } from '@mui/material'

import { Loading } from '../../../ui-components/Loading/Loading'
import { HotelDTO } from '../../../hooks/api/dto/hotel.dto'
import { HotelItem } from './HotelItem'

interface Props {
  hotels: HotelDTO[]
  isLoading: boolean
}

const Container = styled('div')``

const LoadingContainer = styled('div')`
  height: 90vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Hotels: FC<Props> = ({ hotels, isLoading }) => {
  if (isLoading) {
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    )
  }

  return (
    <Container>
      {hotels.map((hotel: HotelDTO) => (
        <HotelItem key={hotel.id} hotel={hotel} />
      ))}
    </Container>
  )
}
