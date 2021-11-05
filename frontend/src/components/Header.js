import styled from 'styled-components'

export default function Header({ title }) {

    return (
        <Wrapper>
            <h1>{title}</h1>
        </Wrapper>
    )
}

const Wrapper = styled.header`
  background-color: hotpink;
  display: grid;
  justify-items: center;
  align-items: center;
`