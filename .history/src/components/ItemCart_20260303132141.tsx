import styled from "@emotion/styled"
import { Link } from "@tanstack/react-router"

import type { ICart } from "@/types/cart"

interface IProps extends ICart {}

const LinkStyle = styled.a`
  width: fit-content;
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
    <li className="w-full grid grid-cols-[1fr_auto] gap-2 items-center border border-black/10 py-2.5 px-3 rounded-lg">
      <div className="w-full flex flex-col">
        <p className="line-clamp-1 text-sm leading-snug font-medium underline-offset-4">Корзина №{id}</p>
      </div>
      <LinkStyle className="font-medium text-sm border border-black/10">
        <Link to={`/cart/$id`} params={{ id: String(id) }} dangerouslySetInnerHTML={{ __html: "Перейти" }} />
      </LinkStyle>
    </li>
  )
}

export default ItemCart
