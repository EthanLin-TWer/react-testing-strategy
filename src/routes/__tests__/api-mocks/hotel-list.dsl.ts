import axios from 'axios'

import { HotelResponse } from '../../../api-client/hotels/response.types'
import { JestBasedDSL } from './base.dsl'

export class HotelListPageDSL extends JestBasedDSL {
  mockGetHotelListOnce(hotels: HotelResponse[]) {
    axios.get = this.mockSuccessPagedResponseOnce(hotels, 15)
  }
}
