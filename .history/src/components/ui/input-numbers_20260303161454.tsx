import styled from "@emotion/styled"

const Container = styled.div`
  width: 6rem;
  height: 2rem;
  border-radius: 0.375rem;
  font-weight: 400;
  overflow: hidden;
  position: relative;
`

const Input = styled.input``

function InputNumbers() {
  return (
    <Container className="border border-black/10 text-sm">
      <Input className="w-full flex items-center pl-3" />
    </Container>
  )
}

export default InputNumbers
