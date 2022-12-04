import BtnGeneral from '../BtnGeneral'
import Title from '../Title'
import Style from './CallAction.module.scss'

const CallAction = ({ callText, contactUs }: { callText: string, contactUs?: boolean }) => {
    return (
        <form className={Style.call__form}>
            <label htmlFor='email'>
                <Title type='main' textColor='blue'>{callText}</Title>
            </label>
            <div>
                <input name='email' type='email' placeholder='Enter email address' />
                <BtnGeneral btnType='primary'>Schedule a Demo</BtnGeneral>
                {contactUs === true ?
                    <p>Have any questions? <strong>Contact Us</strong></p> : ''
                }
            </div>
        </form>
    )
}

export default CallAction
