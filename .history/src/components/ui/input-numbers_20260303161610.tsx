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
`

function InputNumbers() {
  return (
    <Container className="border border-black/10 text-sm">
      <Input
        type="number"
        inputMode="numeric"
        className="w-full h-full flex items-center pl-3 bg-transparent border-none outline-none text-sm font-normal"
      />
    </Container>
  )
}

export default InputNumbers
