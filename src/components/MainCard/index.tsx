import classNames from "classnames"
import Paragraph from "../Paragraph"
import Title from "../Title"
import Style from './MainCard.module.scss'

const MainCard = ({facilitiesImage,facilitiesImageAlt, imageType,titleText,paragraphText}:
    {facilitiesImage?:string, facilitiesImageAlt?: string , imageType?: string, titleText: string, paragraphText: string}) => {
    return (
        <section className={Style.card}>
            <img className={imageType === 'image' ? 
            classNames(Style['image--normal']) :
            classNames(Style['image--icon'])} 
            src={facilitiesImage} alt={facilitiesImageAlt} />
            <div className={Style.card__text}>
            <Title type='section' textColor='blue'>{titleText}</Title>
                <Paragraph textColor='blue'>
                    {paragraphText}
                </Paragraph>
            </div>
        </section>
    )
}

export default MainCard
