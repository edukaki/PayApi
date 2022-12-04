import BtnGeneral from '../BtnGeneral'
import ClientGallery from '../ClientGallery'
import Paragraph from '../Paragraph'
import Title from '../Title'
import Style from './AboutCard.module.scss'

const AboutCard = () => {
    return (
        <div className={Style.card}>
            <ClientGallery backgroundTheme='dark' />
            <div className={Style.card__text}>
                <Title type='section' textColor='white'>Who we work with</Title>
                <Paragraph textColor='white'>
                    Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.
                </Paragraph>
                <BtnGeneral btnType='secondary' backgroundTheme='dark'>About Us</BtnGeneral>
            </div>
        </div>
    )
}

export default AboutCard 
