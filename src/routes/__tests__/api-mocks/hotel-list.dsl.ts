import axios from 'axios'

import { HotelResponse } from '../../../api-client/hotels/response.types'
import { JestBasedDSL } from './base.dsl'

export class HotelListPageDSL extends JestBasedDSL {
  mockGetHotelListOnce(hotels: HotelResponse[]): HotelListPageDSL {
    axios.get = this.mockSuccessPagedResponseOnce(hotels, { itemsPerPage: 15 })
    return this
  }
}
