import { Link } from 'react-router-dom'
import BtnGeneral from '../BtnGeneral'
import Title from '../Title'
import Style from './CallAction.module.scss'

const CallAction = ({ callText, contactUs }: { callText: string, contactUs?: boolean }) => {
    return (
        <form className={Style.call__form}>
            <label htmlFor='email'>
                <Title type='main' textColor='blue'>{callText}</Title>
            </label>
            <div className={Style.input__area}>
                <input name='email' type='email' placeholder='Enter email address' />
                <BtnGeneral btnType='primary'>Schedule a Demo</BtnGeneral>
            </div>
            {contactUs === true ?
                <p className={Style.question}>Have any questions? <Link to='/contact'><strong>Contact Us</strong></Link></p> : ''
            }
        </form>
    )
}

export default CallAction
