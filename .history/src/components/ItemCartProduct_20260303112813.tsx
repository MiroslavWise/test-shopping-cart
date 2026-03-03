import type { IProduct } from "@/types/product"

interface IProps extends IProduct {}

function ItemCartProduct({ id }: IProps) {
  return (
    <li className="w-full flex flex-col rounded-xl overflow-hidden">
      <div className="w-full aspect-video h-auto"></div>
    </li>
  )
}

export default ItemCartProduct
