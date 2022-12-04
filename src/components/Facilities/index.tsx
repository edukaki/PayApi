import FacilitiesCard from '../FacilitiesCard'
import Style from './Facilities.module.scss'
import terminal from '../../assets/home/desktop/illustration-easy-to-implement.svg'
import mockup from '../../assets/home/desktop/illustration-simple-ui.svg'
import financeIcon from '../../assets/home/desktop/icon-personal-finances.svg'
import bankingIcon from '../../assets/home/desktop/icon-banking-and-coverage.svg'
import cardIcon from '../../assets/home/desktop/icon-consumer-payments.svg'
import classNames from 'classnames'

const Facilities = () => {
    return (
        <>
            <aside className={classNames(Style.gallery,Style.gallery__main)}>
                <FacilitiesCard
                    facilitiesImage={terminal} facilitiesImageAlt='terminal' imageType='image'
                    titleText='Easy to implement'
                    paragraphText='Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.'
                />

                <FacilitiesCard
                    facilitiesImage={mockup} facilitiesImageAlt='Ui Mockup' imageType='image'
                    titleText='Simple UI & UX'
                    paragraphText='Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. '
                />

                <div className={classNames(Style.gallery,Style.gallery__secondary)}>
                    <FacilitiesCard
                        facilitiesImage={financeIcon} facilitiesImageAlt='finance icon' imageType='icon'
                        titleText='Simple UI & UX'
                        paragraphText='Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. '
                    />
                    <FacilitiesCard
                        facilitiesImage={bankingIcon} facilitiesImageAlt='banking' imageType='icon'
                        titleText='Simple UI & UX'
                        paragraphText='Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. '
                    />
                    <FacilitiesCard
                        facilitiesImage={cardIcon} facilitiesImageAlt='card' imageType='icon'
                        titleText='Simple UI & UX'
                        paragraphText='Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. '
                    />
                </div>
            </aside>
        </>
    )
}

export default Facilities
