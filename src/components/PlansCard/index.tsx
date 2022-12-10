import Title from '../Title'
import { ReactComponent as Check } from '../../assets/img/shared/desktop/icon-check.svg'
import { v4 as uuid } from 'uuid'
import Paragraph from '../Paragraph'
import BtnGeneral from '../BtnGeneral'
import Style from './PlansCard.module.scss'

type PlanProps = {
    title: string,
    price: string
    benefits: Array<BenefitsProps>
}

type BenefitsProps = {
    title: string,
    include: boolean
}

const PlansCard = (Plan: PlanProps) => {
    return (
        <div className={Style.plan}>
            <Title type='common'>{Plan.title}</Title>
            <span>{Plan.price}</span>
            <div className={Style.card}>
                <div className={Style.card__benefits}>
                    {Plan.benefits.map(benefit => (
                        <div className={Style.card__check__text} key={uuid()}>
                            {benefit.include ?
                                <Check stroke="#BA4270" /> : <Check stroke='none' />}
                            <Paragraph textColor='blue'>{benefit.title}</Paragraph>
                        </div>
                    ))}
                </div>
            </div>
            <BtnGeneral btnType='secondary' backgroundTheme='light'>Request Access</BtnGeneral>
        </div>
    )
}

export default PlansCard