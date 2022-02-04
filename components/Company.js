import Image from "next/image";
import tanks from "../public/tanks.png";
import styled from "styled-components";

const StyledCompany = styled.section`
    display: grid;
    grid-template: 50rem / 11fr 12fr;
    color: #F6F6F6;
    position: relative;
    margin: 0;

    @media (max-width: 425px) {
        display: block;
    }
`

const Header = styled.header`
    display: grid;
    grid-template: 1fr / 11fr 12fr;
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    padding-top: 2.75rem;
    padding-right: 5rem;
    font-size: 0.875rem;
    z-index: 1;
    color: #F6F6F6;

    ul {
        display: flex;
        justify-content: space-between;
        padding: 0 5rem;
        margin: 0;
    }

    li {
        list-style-type: none;
    }

    span {
        padding-left: 5rem;
    }
    
    @media (max-width: 425px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 35px;
        padding-left: 1.875rem;
        padding-right: 1.875rem;

        ul {
            display: none;
        }

        span {
            padding: 0
        }
    }
`

const MenuBurger = styled.div`
    display: inline-block;
    position: relative;
    width: 2rem;

    &:before {
        bottom: 7px;
    }

    &:before, &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #F6F6F6;
    }

    @media (min-width: 425px) {
        display: none
    }
`

const Grid = styled.div`
    display: grid;
    grid-template: 36.5rem 13.5rem / 100%;
    background-color: #5551F7;

    @media (max-width: 425px) {
        display: block;
        padding-top: 10rem;
    }
`

const Title = styled.div`
    display: grid;
    align-items: center;
    justify-items: start;
    padding-left: 5rem;
    border-bottom: 1px solid #D6D6D6;

    h1 {
        font-size: 5.25rem;
        font-weight: 500;
        font-style: normal;
        margin: 0;
    }

    @media (max-width: 425px) {
        border-bottom: none;
        padding-left: 1.875rem;

        h1 {
            font-size: 2.5rem
        }
    }
`
const DescriptionImage = styled.div`
    background-color: #000000;
    opacity: 0.3;
`

const Picture = styled.div`
    position: absolute;
    right: 0;
    z-index: -99;
    overflow: hidden;
    height: 100%;

    @media (max-width: 425px) {
        position: inherit;
    }
`

const BreadCrumbs = styled.div`
    margin-bottom: 1.25rem;
    margin-left: 0.375rem;
    text-align: start;
    font-size: 0.875rem;
    font-weight: 300;

    i {
        margin: 0 10px;
    }
`
const Description = styled.div`
    padding: 3rem 0;
    margin: 0 5rem;
    font-size: 1.5rem;
    line-height: 160%;

    p {
        margin: 0;
    }

    @media (max-width: 425px) {
        font-size: 1rem;
        margin: 0 1.875rem;
    }
`

const Company = () => {
    return (
        <>
            <Header>
                <span>ПЕНЗГИДРОМАШ</span>
                <ul>
                    <li>КОМПАНИЯ</li>
                    <li>ПРОДУКТЫ И УСЛУГИ</li>
                    <li>ПРОЕКТЫ</li>
                    <li>НОВОСТИ</li>
                    <li>КОНТАКТЫ</li>
                </ul>
                <MenuBurger></MenuBurger>
            </Header>
            <StyledCompany>
                <Grid>
                    <Title>
                        <div>
                            <BreadCrumbs>
                                <span>Главная</span>
                                <i className="fas fa-angle-right"></i>
                                <span>Компания</span>
                            </BreadCrumbs>
                            <h1>Компания</h1>
                        </div>
                    </Title>
                    <Description>
                        <p>Основная сфера деятельности «ПензГидромаш» — <br />создание систем для нефтяной, газовой, химической<br /> и нефтехимической сфер промышленности.</p>
                    </Description>
                </Grid>
                <DescriptionImage />
                <Picture>
                    <Image src={tanks} alt="tanks" placeholder="blur"/>
                </Picture>

            </StyledCompany>
        </>
    )
}

export default Company