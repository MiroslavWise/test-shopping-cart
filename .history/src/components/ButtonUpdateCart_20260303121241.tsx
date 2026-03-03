import styled from "@emotion/styled"

import type { ICart } from "@/types/cart"

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
  function handleUpdate() {}

  return (
    <ButtonUpdate
      className="font-medium text-sm h-8 border border-black/10"
      dangerouslySetInnerHTML={{ __html: "Изменить" }}
      onClick={handleUpdate}
    />
  )
}

export default ButtonUpdateCart
