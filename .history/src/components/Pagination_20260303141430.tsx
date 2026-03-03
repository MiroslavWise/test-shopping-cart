import styled from "@emotion/styled"

import { cx } from "@/helpers/cx"
import { dispatchPage } from "@/stores/pages"
import Selector from "./Selector"

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  & > ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`

const ItemPage = styled.a`
  height: 2rem;
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
      <Nav>
        <div className="w-fit gap-3 items-center">
          <Selector />
          <span className="text-black/80 text-sm font-normal whitespace-nowrap">items per page</span>
        </div>
        <ul>
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
