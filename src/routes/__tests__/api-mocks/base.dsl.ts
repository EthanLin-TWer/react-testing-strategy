interface BaseDSL {
  mockSuccessPagedResponseOnce<T>(pagedData: T[], itemsPerPage: number): any
  reset(): void
}

export class JestBasedDSL implements BaseDSL {
  reset() {
    jest.clearAllMocks()
  }

  mockSuccessPagedResponseOnce<T>(arrayOfData: T[], itemsPerPage: number) {
    return jest.fn().mockImplementationOnce(async () => ({
      data: {
        data: arrayOfData,
        totalPages: Math.ceil(arrayOfData.length / itemsPerPage),
        totalCounts: arrayOfData.length,
      },
    }))
  }
}
