import classNames from "classnames"
import Paragraph from "../Paragraph"
import Title from "../Title"
import Style from './MainCard.module.scss'

const MainCard = ({ facilitiesImage, facilitiesImageAlt, imageType, titleText, paragraphText }:
    { facilitiesImage?: string | undefined, facilitiesImageAlt?: string, imageType?: string, titleText: string, paragraphText: string }) => {
    return (
        <section className={Style.card}>
            {
                facilitiesImage ?
                    insertFacilitiesImage(imageType, facilitiesImage, facilitiesImageAlt)
                    : ''
            }
            <div className={Style.card__text}>
                <Title type='section' textColor='blue'>{titleText}</Title>
                <Paragraph textColor='blue'>
                    {paragraphText}
                </Paragraph>
            </div>
        </section>
    )
}

function insertFacilitiesImage(imageType: string | undefined, facilitiesImage: string, facilitiesImageAlt: string | undefined) {
    return <img className={imageType === 'image' ?
        classNames(Style['image--normal']) :
        classNames(Style['image--icon'])}
        src={facilitiesImage} alt={facilitiesImageAlt} />
}

export default MainCard