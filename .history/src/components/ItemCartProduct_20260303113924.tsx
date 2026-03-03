import styled from "@emotion/styled"

import type { IProduct } from "@/types/product"

interface IProps extends IProduct {}

const Li = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  overflow: hidden;
`

function ItemCartProduct({ id, thumbnail }: IProps) {
  return (
    <Li>
      <div className="w-full aspect-video h-auto overflow-hidden bg-black/15">
        <img src={thumbnail} width={"100%"} height={"auto"} className="w-full aspect-video h-auto object-cover" />
      </div>
      <div className="w-full flex flex-col p-4"></div>
    </Li>
  )
}

export default ItemCartProduct
