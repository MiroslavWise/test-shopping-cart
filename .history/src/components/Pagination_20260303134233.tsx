import styled from "@emotion/styled"

const Nav = styled.nav``

interface IProps {
  page: number
  limit: number
  total: number
}

function Pagination({}: IProps) {
  return (
    <div className="w-full flex flex-row items-center justify-center">
      <Nav></Nav>
    </div>
  )
}

export default Pagination
