import styled from "@emotion/styled"

import type { ICart } from "@/types/cart"
import { useState } from "react"

interface IProps extends ICart {
  refetch: () => Promise<any>
}

const ButtonUpdate = styled.button`
  display: flex;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: center;
  white-space: normal;
  padding-inline: 0.625rem;
  height: 2rem;
  position: relative;
`

const Popover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(calc(100% + 0.25rem));
  width: 20rem;
  z-index: 50;
`

function ButtonUpdateCart({}: IProps) {
  const [state, setState] = useState(false)

  function onOpen() {
    setState((_) => !_)
  }

  console.log("state: ", state)

  return (
    <ButtonUpdate
      className="font-medium text-sm h-8 border border-black/10"
      dangerouslySetInnerHTML={{ __html: "Изменить" }}
      onClick={onOpen}
    >
      <Popover className="shadow-md z-50 rounded-lg p-2.5 border border-black/10"></Popover>
    </ButtonUpdate>
  )
}

export default ButtonUpdateCart
