import style from './BtnGeneral.module.scss'
import classNames from 'classnames'

type BtnGeneralProps = {
    children: String,
    btnType: 'primary' | 'secondary',
    backgroundTheme?: 'dark' | 'light'
    disabled?: 'disabled'
}

const BtnGeneral = ({ children, btnType, backgroundTheme }: BtnGeneralProps) => {
    return (
        <button className={(btnType === 'secondary' ? backgroundTheme === 'light' ? 
            classNames(style.common,style.secondary,style['secondary--dark']) :
            classNames(style.common,style.secondary,style['secondary--light']) : 
            classNames(style.common,style.primary)
        )} 
        type='button'
        >
            {children}
        </button>
    )
}

export default BtnGeneral