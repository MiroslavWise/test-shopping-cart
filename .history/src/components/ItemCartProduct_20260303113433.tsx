import type { IProduct } from "@/types/product"

interface IProps extends IProduct {}

function ItemCartProduct({ id, thumbnail }: IProps) {
  return (
    <li className="w-full flex flex-col rounded-xl overflow-hidden">
      <div className="w-full aspect-video h-auto overflow-hidden bg-black/15">
        <img src={thumbnail} width={"100%"} height={"auto"} className="w-full aspect-video h-auto object-cover" />
      </div>
      <div className="w-full flex flex-col p-4">{id}</div>
    </li>
  )
}

export default ItemCartProduct
