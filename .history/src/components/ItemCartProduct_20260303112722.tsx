import type { IProduct } from "@/types/product"

interface IProps extends IProduct {}

function ItemCartProduct({ id }: IProps) {
    return <li className="w-full flex flex-col rounded-xl overflow-hidden">
      {id}
  </li>
}

export default ItemCartProduct
