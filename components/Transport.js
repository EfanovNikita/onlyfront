import Image from "next/image"
import truck from "../public/truck.png"
import train from "../public/train.png"
import styled from "styled-components"
import { useState } from "react"

const StyledTransport = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 6.25rem;

    h2 {
        margin: 0;
        padding-left: 5rem;
        font-weight: 300;
        font-size: 3rem;
        line-height: 150%;
    }

    @media (max-width: 425px) {
        padding-top: 2.5rem;

        h2 {
            padding-left: 1.875rem;
            font-size: 1.5rem;
        }
    }
`

const Description = styled.div`
    display: grid;
    grid-template: 1fr / 11fr 12fr;
    padding-top: 3rem;

    @media (max-width: 425px) {
        display: block;
    }
`

const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    background-color: none;

    div {
        padding-left: 5rem;
        padding-bottom: 5.625rem;

        &:hover {
            background-color: #F6F6F6;
        }
    }

    ul {
        padding-left: 10px;
    }

    li {
        list-style-type: ' - ';
        font-style: normal;
        font-weight: 300;
        font-size: 1.125rem;
        line-height: 180%;
    }

    h3 {
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 300;
        line-height: 160%;
        margin-top: 4.625rem;
        margin-bottom: 1.25rem;
    }

    p {
        font-style: normal;
        font-weight: 300;
        font-size: 1.125rem;
        line-height: 180%;
    }

    @media (max-width: 425px) {
        div {
            padding-left: 1.875rem;
        }

        h3 {
            margin-top: 1rem;
        }
    }
`

const Transport = () => {

    const [togglePicture, setTogglePicture] = useState(truck);

    const mouseEnterEventCar = () => {
        setTogglePicture(truck)
    }

    const mouseEnterEventTrain = () => {
        setTogglePicture(train)
    }

    return (
        <StyledTransport>
            <h2>Транспорт</h2>
            <Description>
                <div><Image src={togglePicture} layout="responsive" sizes="50vw" placeholder="blur" alt="transport" /></div>
                <TextSection>
                    <div onMouseEnter={mouseEnterEventCar} >
                        <h3>Автотранспорт</h3>
                        <ul>
                            <li>Собственная автотранспортная компания</li>
                            <li>Перевозка негабаритных и тяжеловесных грузов</li>
                            <li>Доставка в любую точку России</li>
                        </ul>
                    </div>
                    <div onMouseEnter={mouseEnterEventTrain}>
                        <h3>Железнодорожный<br /> транспорт</h3>
                        <p>На заводе имеется ж/д ветка, заходящая в производственное здание</p>
                    </div>
                </TextSection>
            </Description>
        </StyledTransport>
    )
}

export default Transport