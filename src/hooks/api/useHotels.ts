import { useQuery } from '@tanstack/react-query'

import { getHotels } from '../../api-client/hotels/hotels'
import { SearchCriteria } from '../../api-client/hotels/request.types'
import { CityResponse, HotelResponse } from '../../api-client/hotels/response.types'
import { CitiesDTO, toCitiesDTO } from './dto/city.dto'
import { toHotelDto } from './dto/hotel.dto'

export const useSearchHotels = (criteria: SearchCriteria) => {
  const query = useQuery<HotelResponse>({
    queryKey: ['hotels'],
    queryFn: () => getHotels(criteria),
  })
  const { data, isLoading } = query

  const hotels = data?.data?.map(toHotelDto) || []
  return { hotels, isLoading }
}

export const useRecommendationCities = (): CitiesDTO => {
  const hardcodedCityForNow: CityResponse[] = [
    { id: 'BJ', name: '北京' },
    { id: 'SH', name: '上海' },
    { id: 'GZ', name: '广州' },
    { id: 'SZ', name: '深圳' },
    { id: 'CD', name: '成都' },
    { id: 'CQ', name: '重庆' },
    { id: 'HZ', name: '杭州' },
    { id: 'WH', name: '武汉' },
  ]

  return toCitiesDTO(hardcodedCityForNow)
}
