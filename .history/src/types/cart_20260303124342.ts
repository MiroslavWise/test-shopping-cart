import type { IProduct } from "./product"

/** Обычно применяется type, но я использую для объектов всегда interface, привычка */
export interface ICart {
  id: number
  products: IProduct[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}

export interface IPutProduct {
  id: number
  quantity: number
}
