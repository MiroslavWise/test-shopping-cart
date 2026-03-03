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

const ImgDiv = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  overflow: hidden;
`

function ItemCartProduct({ thumbnail, title, price, quantity }: IProps) {
  return (
    <Li>
      <ImgDiv className="bg-black/15">
        <img src={thumbnail} width={"100%"} height={"auto"} className="w-full aspect-video h-auto object-cover" />
      </ImgDiv>
      <div className="w-full flex flex-col p-4 border-x border-black/15 gap-1">
        <div className="w-full flex flex-row items-start justify-between gap-2">
          <p className="text-base leading-snug font-medium text-black/90">{title}</p>
          <div className="text-black/90 whitespace-nowrap text-xs font-medium py-0.5 px-2 flex items-center bg-gray-200 rounded-full">
            {price}
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-between">
          <span>Количество:</span>
          <span>{quantity}</span>
        </div>
        <div className="w-full flex flex-row items-center justify-between">
          <span>Итого:</span>
          <span>{quantity}</span>
        </div>
      </div>
      <footer className="w-full p-4 border border-black/15 rounded-b-xl"></footer>
    </Li>
  )
}

export default ItemCartProduct
