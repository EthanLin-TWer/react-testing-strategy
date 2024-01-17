import { FC } from 'react'
import { Button, styled } from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'

import { SearchDropdown } from '../../../ui-components/SearchDropdown/SearchDropdown'
import { DateRangePicker } from '../../../ui-components/DateRangePicker/DateRangePicker'
import { Counter } from '../../../ui-components/Counter/Counter'
import { useRecommendationCities } from '../../../hooks/api/useHotels'

interface Props {
  city: string
  checkinDate: string
  checkoutDate: string
  noOfOccupancies: number
}

const Container = styled('div')`
  //border-bottom: 1px solid #555;
  position: sticky;
  z-index: 500;
  top: 0;
  background-color: white;
  box-shadow: 0 8px 20px 0 rgba(97, 121, 157, 0.16);
`

const RowContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 1px solid transparent;
  background-color: white;
  padding: 20px 5px 10px;
  margin-bottom: 10px;

  > div:nth-of-type(1) {
    width: 20%;
  }

  > div:nth-of-type(2) {
    width: 50%;
  }

  > div:nth-of-type(3) {
    width: 20%;
  }

  > div:nth-of-type(4) {
    width: 10%;
  }
`

const StyledButton = styled(Button)`
  height: 61px;
  margin-left: 30px;
  border-radius: 0;
`

const DirtyPaddingTop = styled('div')`
  margin-top: 10px;
`

export const SearchBarOnTop: FC<Props> = ({ city, checkinDate, checkoutDate, noOfOccupancies }) => {
  const recommendationCities = useRecommendationCities()

  return (
    <Container data-testid="search-bar">
      <RowContainer>
        <SearchDropdown
          label="目的地/酒店名称"
          value={city}
          options={recommendationCities.getNames()}
          testId="destination"
        />

        <DateRangePicker
          startLabel="入住时间"
          endLabel="退房时间"
          defaultStartDate={new Date(checkinDate)}
          defaultEndDate={new Date(checkoutDate)}
          testId="checkin-period"
        />

        <DirtyPaddingTop>
          <Counter label="入住人数" min={1} defaultValue={noOfOccupancies} testId="occupancy" />
        </DirtyPaddingTop>

        <StyledButton variant="contained" data-testid="search">
          <TravelExploreIcon />
        </StyledButton>
      </RowContainer>
    </Container>
  )
}
