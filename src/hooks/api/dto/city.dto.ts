import { CityResponse } from '../response/hotels.response'

export interface CityDTO {
  id: string
  name: string
}

export interface CitiesDTO {
  data: CityDTO[]
  getNames(): string[]
  findByName(name: string): CityDTO | undefined
}

// for entity DTO, spread the data (to support direct access) and add behaviors here
const toCityDTO = (city: CityResponse): CityDTO => {
  return { ...city }
}

// for collections DTO, expose `data` props for the collection DTO, and add behaviors here
export const toCitiesDTO = (cities: CityResponse[]): CitiesDTO => {
  const data: CityDTO[] = cities.map(toCityDTO)
  const getNames = () => cities.map((city) => city.name)
  const findByName = (name: string) => cities.find((city) => city.name === name)

  return { data, getNames, findByName }
}
