import styled from "@emotion/styled"
import { Link } from "@tanstack/react-router"

import type { ICart } from "@/types/cart"

interface IProps extends ICart {}

const LinkStyle = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding-inline: 0.625rem;
  height: 2rem;
  position: relative;

  a {
    white-space: normal;
  }
`

function ItemCart({ id }: IProps) {
  return (
    <li>
      <LinkStyle className="font-medium text-sm border border-black/10">
        <Link
          to={`/cart/$id`}
          params={{
            id: String(id),
          }}
        >
          Перейти
        </Link>
      </LinkStyle>
    </li>
  )
}

export default ItemCart
