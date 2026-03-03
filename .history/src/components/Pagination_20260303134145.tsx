import styled from "@emotion/styled"

const Nav = styled.nav``

interface IProps {
  page: number
  limit: number
  total: number
}

function Pagination() {
  return <Nav></Nav>
}

export default Pagination
