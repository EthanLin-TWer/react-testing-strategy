interface BaseDSL {
  mockSuccessPagedResponseOnce<T>(pagedData: T[], config: { itemsPerPage: number }): any
  reset(): void
}

export class JestBasedDSL implements BaseDSL {
  reset() {
    jest.clearAllMocks()
  }

  mockSuccessPagedResponseOnce<T>(arrayOfData: T[], config: { itemsPerPage: number }) {
    return jest.fn().mockImplementationOnce(async () => ({
      data: {
        data: arrayOfData,
        totalPages: Math.ceil(arrayOfData.length / config.itemsPerPage),
        totalCounts: arrayOfData.length,
      },
    }))
  }
}
