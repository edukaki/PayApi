import classNames from 'classnames'
import MainCard from '../../components/MainCard'
import Title from '../../components/Title'
import image from '../../assets/img/about/mobile/image-team-members.jpg'
import CallAction from '../../components/CallAction'
import Paragraph from '../../components/Paragraph'
import Style from '../styles/Pages.module.scss'

const About = () => {
    return (
        <main className={Style['main__background--generic']}>
            <div className={Style.gallery}>
                <div className={classNames(Style.gallery, Style.gallery__secondary)}>
                    <Title type='main' textColor='blue'>We empower innovators by delivering access to the financial system</Title>
                    <MainCard
                        titleText='Our Vision'
                        paragraphText='Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.'
                    />
                    <MainCard
                        titleText='Our Business'
                        paragraphText='At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. '
                    />
                </div>
                <img src={image} alt='Team members' />
                <div className={classNames(Style.gallery, Style.gallery__secondary)}>
                    <div className={classNames(Style.gallery, Style.gallery__data)}>
                        <Paragraph textColor='blue'>Team Members</Paragraph>
                        <span className={Style.pink}>300+</span>
                        <Paragraph textColor='blue'>Team Members</Paragraph>
                        <span className={Style.pink}>3</span>
                        <Paragraph textColor='blue'>Team Members</Paragraph>
                        <span className={Style.pink}>10M+</span>
                    </div>

                    <MainCard
                        titleText='The Culture'
                        paragraphText={`We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.`}
                    />
                    <MainCard
                        titleText='The People'
                        paragraphText={`We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.`}
                    />
                    <CallAction callText='Ready to start?' contactUs={true} />
                </div>
            </div>
        </main>
    )
}

export default About