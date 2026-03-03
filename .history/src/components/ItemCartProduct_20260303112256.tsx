import type { IProduct } from "@/types/product"

interface IProps extends IProduct {}

function ItemCartProduct({}: IProps) {
  return <li className="w-full flex flex-col rounded-xl overflow-hidden"></li>
}

export default ItemCartProduct
