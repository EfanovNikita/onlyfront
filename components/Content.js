import styled from "styled-components";

const StyledContent = styled.main`
    display: flex;
    flex-direction: column;
`

const Content = ({ children }) => {
    return (
        <StyledContent>{ children }</StyledContent>
    )
}

export default Content