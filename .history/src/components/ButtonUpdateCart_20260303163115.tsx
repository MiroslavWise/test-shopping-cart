import { useState } from "react"
import styled from "@emotion/styled"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import InputNumbers from "./ui/input-numbers"

import { cx } from "@/helpers/cx"
import { putCart } from "@/services/carts"
import type { ICart, IPutProduct } from "@/types/cart"
import { useOutsideClickEvent } from "@/helpers/useOutsideClickEvent"

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
  white-space: normal;
  color: #ffffff;
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
  const [state, setState, ref] = useOutsideClickEvent()

  // const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: putCart,
    async onSuccess(data) {
      setLoading(false)
    },
  })

  function onOpen() {
    setState((_) => !_)
  }

  function change(value: number, index: number) {
    setProductsState((state) => {
      const newState = [...state]

      newState[index] = {
        ...newState[index],
        quantity: value,
      }

      return newState
    })
  }

  async function update() {
    if (loading) return

    const array: IPutProduct[] = []
    for (let i = 0; i < products.length; i++) {
      const old = products[i]
      const ifUpdate = productsState[i]

      if (old.quantity !== ifUpdate.quantity) {
        array.push({
          id: old.id,
          quantity: ifUpdate.quantity,
        })
      }
    }
    if (array.length === 0) return

    setLoading(true)
    mutate({ id, products: array })
  }

  return (
    <ButtonUpdate ref={ref} className="font-medium text-sm border border-black/10" disabled={loading} onClick={onOpen}>
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
            <li key={`::${item.id}-change::`} className="w-full flex flex-row items-center justify-between">
              <span className="text-start line-clamp-1 overflow-hidden" dangerouslySetInnerHTML={{ __html: item.title }} />
              <InputNumbers count={item.quantity} onChange={(value) => change(value, index)} />
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
