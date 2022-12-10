import classNames from 'classnames'
import CallAction from '../../components/CallAction'
import PlansCard from '../../components/PlansCard'
import Title from '../../components/Title'
import Style from '../styles/Pages.module.scss'

const Pricing = () => {
    return (
        <main className={Style['main__background--generic']}>
            <div className={classNames(Style.gallery, Style.gallery__secondary)}>
                <Title type='main' textColor='blue'>Pricing</Title>
                <PlansCard
                    title='Free Plan'
                    price='$0.00'
                    benefits={
                        [
                            {
                                title: 'Transaction',
                                include: true
                            },
                            {
                                title: 'Auth',
                                include: true
                            },
                            {
                                title: 'Identity',
                                include: true
                            },
                            {
                                title: 'Investments',
                                include: false
                            },
                            {
                                title: 'Assets',
                                include: false
                            },
                            {
                                title: 'Liabilities',
                                include: false
                            },
                            {
                                title: 'Income',
                                include: false
                            }
                        ]
                    }
                />

<PlansCard
                    title='Basic Plan'
                    price='$249.00'
                    benefits={
                        [
                            {
                                title: 'Transaction',
                                include: true
                            },
                            {
                                title: 'Auth',
                                include: true
                            },
                            {
                                title: 'Identity',
                                include: true
                            },
                            {
                                title: 'Investments',
                                include: true
                            },
                            {
                                title: 'Assets',
                                include: true
                            },
                            {
                                title: 'Liabilities',
                                include: false
                            },
                            {
                                title: 'Income',
                                include: false
                            }
                        ]
                    }
                />

<PlansCard
                    title='Premium Plan'
                    price='$499.00'
                    benefits={
                        [
                            {
                                title: 'Transaction',
                                include: true
                            },
                            {
                                title: 'Auth',
                                include: true
                            },
                            {
                                title: 'Identity',
                                include: true
                            },
                            {
                                title: 'Investments',
                                include: true
                            },
                            {
                                title: 'Assets',
                                include: true
                            },
                            {
                                title: 'Liabilities',
                                include: true
                            },
                            {
                                title: 'Income',
                                include: true
                            }
                        ]
                    }
                />

                <CallAction contactUs={true} callText='Ready to start?' />
            </div>
        </main>
    )
}

export default Pricing
