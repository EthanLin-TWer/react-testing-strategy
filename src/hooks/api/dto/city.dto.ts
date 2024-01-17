import { CityResponse } from '../../../api-client/hotels/response.types'

export interface CityDTO {
  id: string
  name: string
}

export interface CitiesDTO {
  data: CityDTO[]
  getNames(): string[]
  findByName(name: string): CityDTO | undefined
  findById(cityId: string): CityDTO | undefined
}

// for entity DTO, spread the data (to support direct access) and add behaviors here
const toCityDTO = (city: CityResponse): CityDTO => {
  return { ...city }
}

// for collections DTO, expose `data` props for the collection DTO, and add behaviors here
export const toCitiesDTO = (cities: CityResponse[]): CitiesDTO => {
  const data: CityDTO[] = cities.map(toCityDTO)
  const getNames = () => cities.map((city) => city.name)
  const findByName = (name: string) => data.find((city) => city.name === name)
  const findById = (cityId: string) => data.find((city) => city.id === cityId)

  return { data, getNames, findByName, findById }
}
