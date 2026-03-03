import { cx } from "@/helpers/cx"
import { dispatchPage } from "@/stores/pages"
import styled from "@emotion/styled"

const Nav = styled.nav``

const ItemPage = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 0.25rem;
  padding-inline: 0.5rem;
  border-radius: 0.375rem;
  text-align: center;
`

function perPage(limit: number, total: number) {
  return Array.from({ length: Math.ceil(total / limit) })
}

function Pagination({ page, limit, total }: IProps) {
  const items = perPage(limit, total)

  return (
    <div className="w-full flex flex-row items-center justify-center">
      <Nav className="flex flex-row items-center ">
        <ul className="flex flex-row items-center justify-center gap-0">
          {items.map((_, index) => (
            <ItemPage
              className={cx("text-sm font-normal text-black/80", page === index + 1 ? "bg-[#0000000d]" : "")}
              dangerouslySetInnerHTML={{ __html: index + 1 }}
              onClick={() => dispatchPage(index + 1)}
            />
          ))}
        </ul>
      </Nav>
    </div>
  )
}

export default Pagination

interface IProps {
  page: number
  limit: number
  total: number
}
