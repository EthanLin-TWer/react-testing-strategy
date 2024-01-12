import { CityResponse } from '../response/hotels.response'

export interface CityDTO {
  id: string
  value: string
}

export const toCityDTO = (city: CityResponse): CityDTO => {
  return { id: city.id, value: city.name }
}
