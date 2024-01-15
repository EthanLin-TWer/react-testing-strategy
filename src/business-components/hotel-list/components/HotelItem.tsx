import { FC } from 'react'
import { HotelDTO } from '../../../hooks/api/dto/hotel.dto'
import { Typography } from '@mui/material'

interface Props {
  hotel: HotelDTO
}

export const HotelItem: FC<Props> = ({ hotel }) => {
  const formatUserRatingText = (userRating: number) => {
    const MINIMUM_NO_OF_RATINGS_TO_BE_DISPLAYED = 100
    if (userRating <= MINIMUM_NO_OF_RATINGS_TO_BE_DISPLAYED) {
      return `≤100条点评`
    }

    const formatter = new Intl.NumberFormat('en-US')
    return `${formatter.format(userRating)}条点评`
  }

  return (
    <div data-testid="hotel-item">
      <img src={hotel.imgSrc} alt="" width={150} />
      <Typography variant="subtitle1" data-testid="hotel-name">
        {hotel.name}
      </Typography>

      <Typography variant="subtitle2" data-testid="hotel-position">
        {hotel.position.area}
      </Typography>

      <Typography variant="subtitle2" data-testid="proposed-price">
        ￥{hotel.leastAvailablePrice}起
      </Typography>

      <Typography variant="body2" data-testid="hotel-star">
        {hotel.starRating}星级
      </Typography>

      <Typography variant="body2" data-testid="user-ratings">
        用户评分：{hotel.userRating}
      </Typography>

      <Typography variant="body2" data-testid="no-of-user-ratings">
        {formatUserRatingText(hotel.noOfUserRatings)}
      </Typography>
    </div>
  )
}
