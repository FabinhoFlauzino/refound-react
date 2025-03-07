type RefundAPIResponse = {
  [x: string]: any
  refund: any
  id: string
  userId: string
  name: string
  description: CategoriesAPIEnum
  amount: number
  filename: string
  user: {
    name: string
  }
}

type RefundsPaginationAPIResponse = {
  refunds: RefundAPIResponse[]
  pagination: {
    page: number,
    perPage: number,
    totalRecords: number,
    totalPages: number
  }
}