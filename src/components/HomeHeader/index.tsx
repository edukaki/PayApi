import CallAction from '../CallAction'
import mockup from '../../assets/home/desktop/illustration-phone-mockup.svg'
import Style from './HomeHeader.module.scss'

const HomeHeader = () => {
    return (
        <header className={Style.card}>
            <img src={mockup} alt='cellphone mockup' />
            <CallAction callText='Start building with our APIs for absolutely free.' contactUs={true} />
        </header>
    )
}

export default HomeHeader