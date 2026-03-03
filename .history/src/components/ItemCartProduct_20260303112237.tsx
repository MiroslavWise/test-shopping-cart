import type { IProduct } from "@/types/product"

interface IProps extends IProduct {}

function ItemCartProduct({}: IProps) {
  return <li className="w-full flex flex-col"></li>
}

export default ItemCartProduct
