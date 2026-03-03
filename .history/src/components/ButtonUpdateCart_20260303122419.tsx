import styled from "@emotion/styled"

import type { ICart } from "@/types/cart"
import { useState } from "react"
import { cx } from "@/helpers/cx"

interface IProps extends ICart {
  refetch: () => Promise<any>
}

const ButtonUpdate = styled.button`
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

const Popover = styled.div`
  background-color: #ffffff;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(calc(100% + 0.25rem));
  width: 20rem;
  z-index: 50;
  border-radius: 0.5rem;
  padding: 0.625rem;
`

function ButtonUpdateCart({}: IProps) {
  const [state, setState] = useState(false)

  function onOpen() {
    setState((_) => !_)
  }

  console.log("state: ", state)

  return (
    <ButtonUpdate className="font-medium text-sm h-8 border border-black/10" onClick={onOpen}>
      <span>Изменить</span>
      <Popover
        className={cx(
          "shadow-md border border-black/10 transition-all flex flex-col gap-4",
          state ? "pointer-events-auto opacity-100 visible" : "pointer-events-none opacity-0 invisible",
        )}
      >
        <div className="w-full flex flex-col">
          <p className="font-medium text-sm mt-2">Изменение корзины</p>
          <span>Здесь вы можете поменять кол-во товара или удалить его</span>
        </div>
      </Popover>
    </ButtonUpdate>
  )
}

export default ButtonUpdateCart
