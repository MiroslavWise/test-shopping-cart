import styled from "@emotion/styled"

const Nav = styled.nav``

interface IProps {
  page: number
  limit: number
  total: number
}

function Pagination({}: IProps) {
  return <Nav></Nav>
}

export default Pagination
