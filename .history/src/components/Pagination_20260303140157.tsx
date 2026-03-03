import styled from "@emotion/styled"

const Nav = styled.nav``

interface IProps {
  page: number
  limit: number
  total: number
}

const ItemPage = styled.a``

function perPage(limit: number, total: number) {
  return Array.from({ length: Math.ceil(total / limit) })
}

function Pagination({ page, limit, total }: IProps) {
  const items = perPage(limit, total)

  return (
    <div className="w-full flex flex-row items-center justify-center">
      <Nav></Nav>
    </div>
  )
}

export default Pagination
