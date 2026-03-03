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

function ButtonUpdateCart({}: IProps) {
  const [state, setState] = useState(false)

  function onOpen() {}

  return (
    <ButtonUpdate
      className="font-medium text-sm h-8 border border-black/10"
      dangerouslySetInnerHTML={{ __html: "Изменить" }}
      onClick={onOpen}
    />
  )
}

export default ButtonUpdateCart
