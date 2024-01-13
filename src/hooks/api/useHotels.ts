import { useQuery } from '@tanstack/react-query'

import { getHotels } from '../../api-client/hotels/hotels'
import { SearchCriteria } from '../../api-client/hotels/request.types'
import { HotelResponse } from '../../api-client/hotels/response.types'
import { CitiesDTO, toCitiesDTO } from './dto/city.dto'

export const useSearchHotels = (criteria: SearchCriteria) => {
  const query = useQuery<HotelResponse>({
    queryKey: ['hotels'],
    queryFn: () => getHotels(criteria),
    enabled: false,
  })
  const { data = [], isLoading, refetch } = query

  return {
    hotels: data,
    triggerSearchHotel: refetch,
  }
}

export const useRecommendationCities = (): CitiesDTO => {
  const hardcodedCityForNow = [
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
