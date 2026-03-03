/** Обычно применяется type, но я использую для объектов всегда interface, привычка */
export interface ICart {
  id: number
  products: [
    {
      id: 168
      title: "Charger SXT RWD"
      price: 32999.99
      quantity: 3
      total: 98999.97
      discountPercentage: 13.39
      discountedTotal: 85743.87
      thumbnail: "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png"
    },
    {
      id: 78
      title: "Apple MacBook Pro 14 Inch Space Grey"
      price: 1999.99
      quantity: 2
      total: 3999.98
      discountPercentage: 18.52
      discountedTotal: 3259.18
      thumbnail: "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"
    },
    {
      id: 183
      title: "Green Oval Earring"
      price: 24.99
      quantity: 5
      total: 124.94999999999999
      discountPercentage: 6.28
      discountedTotal: 117.1
      thumbnail: "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png"
    },
  ]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}
