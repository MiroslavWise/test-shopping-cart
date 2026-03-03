import type { ICart } from "@/types/cart"

interface IProps extends ICart {}

function ButtonUpdateCart({}: IProps) {
  return (
    <ButtonUpdate
      className="font-medium text-sm h-8 border border-black/10"
      dangerouslySetInnerHTML={{ __html: "Изменить" }}
      onClick={handleUpdate}
    />
  )
}

export default ButtonUpdateCart
