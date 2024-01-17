import { FC } from 'react'
import { HotelDTO } from '../../../hooks/api/dto/hotel.dto'
import { Rating, styled, Typography } from '@mui/material'

interface Props {
  hotel: HotelDTO
}

const RowFlexStart = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const RowContainer = styled(RowFlexStart)`
  width: 80%;
  padding: 15px;
  margin: 25px auto;
  border: 1px solid #d6ecff;
`

const HotelIntro = styled('div')`
  margin-left: 20px;
`

const LeftContainer = styled('div')`
  padding-right: 20px;
  border-right: 1px solid #d6ecff;

  width: 70%;
`

const RightContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 30%;

  text-align: right;
`

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
      <RowContainer>
        <LeftContainer>
          <RowFlexStart>
            <img src={hotel.imgSrc} alt="" width={250} />

            <HotelIntro>
              <Typography variant="subtitle1" data-testid="hotel-name">
                {hotel.name}

                <Rating value={hotel.starRating} readOnly size="small" data-testid="hotel-star" />
              </Typography>

              <Typography variant="subtitle2" data-testid="hotel-position">
                {hotel.position.area}
              </Typography>
            </HotelIntro>
          </RowFlexStart>
        </LeftContainer>

        <RightContainer>
          <Typography variant="body2" data-testid="proposed-price">
            <Typography variant="h5" component="span" sx={{ color: '#287dfa' }}>
              ￥{hotel.leastAvailablePrice}
            </Typography>{' '}
            起
          </Typography>

          <div>
            <Typography variant="body2" data-testid="user-ratings">
              用户评分：{hotel.userRating}
            </Typography>

            <Typography variant="body2" component="span" data-testid="no-of-user-ratings">
              {formatUserRatingText(hotel.noOfUserRatings)}
            </Typography>
          </div>
        </RightContainer>
      </RowContainer>
    </div>
  )
}
