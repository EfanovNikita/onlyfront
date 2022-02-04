import Image from "next/image"
import picture from "../public/detail.png"
import styled from "styled-components"

const StyledAboutUs = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 9.125rem;

    p {
        margin: 0;
    }

    @media (max-width: 425px) {
        padding-top: 2.5rem;
    }
`

const Mission = styled.div`
    padding: 0 5rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 7.8125rem;

    p {
        width: 75rem;
        font-size: 1.5625rem;
        line-height: 160%;
    }

    h2 {
        margin: 0;
        line-height: 150%;
        font-size: 3rem;
        font-weight: 300;
    }

    
    @media (max-width: 425px) {
        flex-direction: column;
        padding: 0 1.875rem;
        margin-bottom: 1rem;

        p {
            width: 100%;
            font-size: 1rem;
        }

        h2 {
            font-size: 1.5rem;
            padding-bottom: 1.875rem;
        }
    }
`

const About = styled.div`
    display: grid;
    grid-template: 1fr / 11fr 12fr;

    div {
        padding: 0 5rem;
    }

    p {
        font-size: 1.125rem;
        line-height: 180%;
        margin-bottom: 2rem;
    }

    
    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;

        div {
            padding: 0 1.875rem;
        }

        p {
            font-size: 1rem;
            margin-bottom: 0.5rem;
            padding-top: 0.5rem;
        }
    }
`

const AboutUs = () => {
    return (
        <StyledAboutUs>
            <Mission>
                <h2>О нас</h2>
                <p>
                    Наша цель — взаимовыгодное сотрудничество на основе долгосрочных контрактов.<br />
                    Мы представлены на рынке с 2006 года и не перестаем развиваться, совершенствовать качество<br />
                    своих услуг, оптимизировать затраты для снижения стоимости продукции.
                </p>
            </Mission>
            <About>
                <Image src={picture} alt="Detail image" placeholder="blur"/>
                <div>
                    <p>
                        Выполняем все работы по проектированию систем,
                        закупке необходимых материалов, производству, установке,
                        наладке, гарантийному и внегарантийному обслуживанию.
                        Уникальный парк оборудования позволяет находить решения для любых
                        производственных задач клиентов.
                    </p>
                    <p>
                        Также мы берем на себя все сложности, связанные с сертификацией
                        нестандартного оборудования. В этом процессе принимают участие
                        инженеры и юристы с многолетним опытом работы. Клиенты получают
                        все нужные документы для того, чтобы использование оборудования
                        было полностью законным.
                    </p>
                    <p>
                        Выпускаемая нашей компанией продукция разрешена к
                        применению Ростехнадзором.
                        На производстве внедрен жесткий менеджмент качества — 
                        по международному стандарту ГОСТ Р ИСО 9001.
                    </p>
                </div>
            </About>
        </StyledAboutUs>
    )
}

export default AboutUs