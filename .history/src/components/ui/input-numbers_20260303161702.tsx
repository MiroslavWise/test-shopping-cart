import styled from "@emotion/styled"

const Container = styled.div`
  width: 6rem;
  height: 2rem;
  border-radius: 0.375rem;
  font-weight: 400;
  overflow: hidden;
  position: relative;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  background-color: transparent;
  border-style: none;
  outline-style: none;
`

interface IProps {
  count: number
}

function InputNumbers() {
  return (
    <Container className="border border-black/10 text-sm">
      <Input type="number" inputMode="numeric" value={count} className="text-sm font-normal" />
    </Container>
  )
}

export default InputNumbers
