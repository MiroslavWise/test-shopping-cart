import styled from "@emotion/styled"

import type { ICart, IPutProduct } from "@/types/cart"
import { useState } from "react"
import { cx } from "@/helpers/cx"
import { putCart } from "@/services/carts"

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
const ButtonEnd = styled.button`
  display: flex;
  background-color: #000000;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding-inline: 0.625rem;
  height: 2rem;
  position: relative;

  & > span {
    white-space: normal;
    color: #ffffff;
  }
`

const Popover = styled.div`
  background-color: #ffffff;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(calc(2rem + 0.25rem));
  width: 20rem;
  z-index: 50;
  border-radius: 0.5rem;
  padding: 0.625rem;
`

function ButtonUpdateCart({ products = [], id }: IProps) {
  const [loading, setLoading] = useState(false)
  const [productsState, setProductsState] = useState(products)
  const [state, setState] = useState(false)

  function onOpen() {
    setState((_) => !_)
  }

  function change(index: number) {
    setProductsState((state) => {
      const newState = [...state]

      newState[index] = {
        ...newState[index],
        quantity: newState[index].quantity + 2,
      }

      return newState
    })
  }

  async function update() {
    const array: IPutProduct[] = []

    await putCart(id, array)
  }

  return (
    <ButtonUpdate className="font-medium text-sm border border-black/10" disabled={loading} onClick={onOpen}>
      <span>Изменить</span>
      <Popover
        className={cx(
          "shadow-md border border-black/10 transition-all flex flex-col gap-4",
          state ? "pointer-events-auto opacity-100 visible" : "pointer-events-none opacity-0 invisible",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex flex-col items-start text-start">
          <p className="font-medium text-sm mt-2">Изменение корзины</p>
          <span className="text-sm text-gray-500">Здесь вы можете поменять кол-во товара или удалить его</span>
        </div>
        <ul className="w-full flex flex-col gap-2">
          {productsState.map((item, index) => (
            <li key={`::${item.id}-change::`} className="w-full flex">
              <div onClick={() => change(index)} dangerouslySetInnerHTML={{ __html: "Добавить 2" }} />
              <span>{item.quantity}</span>
            </li>
          ))}
        </ul>
        <ButtonEnd
          disabled={loading}
          className="ml-auto font-medium text-sm"
          dangerouslySetInnerHTML={{ __html: "Обновить" }}
          onClick={update}
        />
      </Popover>
    </ButtonUpdate>
  )
}

export default ButtonUpdateCart
