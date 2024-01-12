import { CityResponse } from '../response/hotels.response'

export interface CityDTO {
  id: string
  name: string
}

export const toCityDTO = (city: CityResponse): CityDTO => {
  return { ...city }
}
