import { Link } from "@tanstack/react-router"

import type { ICart } from "@/types/cart"

interface IProps extends ICart {}

function ItemCart({ id }: IProps) {
  return (
    <li>
      <Link
        to={`/cart/$id`}
        params={{
          id: String(id),
        }}
      />
    </li>
  )
}

export default ItemCart
