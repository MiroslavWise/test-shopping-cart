import styled from "@emotion/styled"

const Nav = styled.nav``

interface IProps {
  page: number
  limit: number
  total: number
}

const ItemPage = styled.a`

`

function perPage(limit: number, total: number) {
  
}

function Pagination({ page, limit, total }: IProps) {


  return (
    <div className="w-full flex flex-row items-center justify-center">
      <Nav>

      </Nav>
    </div>
  )
}

export default Pagination
