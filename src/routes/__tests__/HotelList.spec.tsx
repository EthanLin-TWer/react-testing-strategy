import mockAxios from 'jest-mock-axios'

describe.skip('hotels list', () => {
  describe('search result', () => {
    beforeEach(() => {
      // // given ①
      // searchPageDSL.mockRecommendationCities([
      //   { id: 'BJ', name: '北京', }, { id: 'SH', name: '上海', },
      //   { id: 'GZ', name: '广州', }, { id: 'SZ', name: '深圳', },
      //   { id: 'CD', name: '成都', }, { id: 'CQ', name: '重庆', },
      //   { id: 'HZ', name: '杭州', }, { id: 'WH', name: '武汉', },
      // ])
    })

    afterEach(() => {
      // searchPageDSL.reset()
    })

    it('should call search endpoint with correct parameters: city id, check dates in yyyy-MM-dd, and no. of occupancies', async () => {
      expect(mockAxios.get).toHaveBeenCalledWith('/hotels', {
        params: { checkinDate: '2024-01-20', checkoutDate: '2024-01-28', city: 'HZ', noOfOccupancies: 2 },
      })
    })
  })
})
