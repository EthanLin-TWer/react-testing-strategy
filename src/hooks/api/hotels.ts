import { CitiesDTO, toCitiesDTO } from './dto/city.dto'

export const useSearchHotels = () => {}

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
