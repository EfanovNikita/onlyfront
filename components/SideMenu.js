import styled from "styled-components";

const StyledSideMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #D6D6D6;

    @media (max-width: 425px) {
        display: none;
    }
`

const Menu = styled.div`
    writing-mode: vertical-rl;
    height: 50rem;
`

const MenuBurger = styled.div`
    display: inline-block;
    position: relative;
    width: 1.875rem;
    margin-top: 2.75rem;
    margin-bottom: 1.25rem;

    &:after {
        top: 0.5rem;
    }

    &:before, &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: black;
    }
`

const ScrollDown = styled.div`
    margin: 2rem 0;
    font-size: 0.875rem;
    writing-mode: vertical-rl;
    line-height: 5rem;
`

const ArrowDown = styled.div`
    display: inline-block;
    position: relative;
    writing-mode: vertical-rl;
    width: 3.25rem;
    margin-top: 2.75rem;
    margin-bottom: 1.25rem;

    &:after {
        width: 2.25rem;
        transform: rotate(45deg);
        left: -0.25rem;
        top: 0.8rem;
    }

    &:before {
        width: 2.25rem;
        transform: rotate(-45deg);
        right: -0.25rem;
        top: 0.8rem;
    }

    span {
        width: 100%;
        transform: rotate(90deg)
    }

    &:before, &:after, span {
        content: '';
        position: absolute;
        height: 1px;
        background-color: black;
    }
`

const ArrowUp = styled.div`
    position: relative;
    writing-mode: vertical-rl;
    line-height: 5rem;
    width: 3.25rem;
    margin-top: 2.75rem;
    margin-bottom: 3rem;

    &:after {
        width: 2.25rem;
        transform: rotate(-45deg);
        left: -0.25rem;
        top: -0.8rem;
    }

    &:before {
        width: 2.25rem;
        transform: rotate(45deg);
        right: -0.25rem;
        top: -0.8rem;
    }

    span {
        width: 100%;
        transform: rotate(90deg)
    }

    &:before, &:after, span {
        content: '';
        position: absolute;
        height: 1px;
        background-color: black;
    }
`

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
`

const SideMenu = () => {
    return (
        <StyledSideMenu>
            <Menu>
                <MenuBurger></MenuBurger>
                <span>МЕНЮ</span>
            </Menu>
            <Flex>
                <ScrollDown>ЛИСТАЙ ВНИЗ<ArrowDown><span></span></ArrowDown></ScrollDown>
                <ArrowUp><span></span></ArrowUp>
            </Flex>
        </StyledSideMenu>
    )
}

export default SideMenu