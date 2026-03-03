import styled from "@emotion/styled"
import { Link } from "@tanstack/react-router"

import type { ICart } from "@/types/cart"

interface IProps extends ICart { }

const ButtonUpdate = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding-inline: 0.625rem;
  height: 2rem;
  position: relative;

  & > span {
    white-space: normal;
  }
`

function ItemCart({ id }: IProps) {
  return (
    <li>
      <Link
        to={`/cart/$id`}
        params={{
          id: String(id),
        }}
      >
        Перейти
      </Link>
    </li>
  )
}

export default ItemCart
