import styled from "styled-components"

const StyledGrid = styled.div`
    display: grid;
    grid-template: minmax(100vh, auto) / 23fr 1fr;

    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
    }
`

const Grid = ({ children }) => {
    return (
        <StyledGrid>
            {children}
        </StyledGrid>
    )
}

export default Grid