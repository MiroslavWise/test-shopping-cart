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

function ItemCartProduct({ thumbnail }: IProps) {
  return (
    <Li>
      <ImgDiv className="bg-black/15">
        <img src={thumbnail} width={"100%"} height={"auto"} className="w-full aspect-video h-auto object-cover" />
      </ImgDiv>
      <div className="w-full flex flex-col p-4 border-x border-black/15"></div>
      <footer className="w-full p-4 border border-black/15 rounded-b-xl"></footer>
    </Li>
  )
}

export default ItemCartProduct
