import style from './styles/BtnGeneral.module.scss'
import '../../styles/index.scss'
import classNames from 'classnames'

type BtnGeneralProps = {
    children: String,
    type: 'primary' | 'secondary',
    backgroundTheme?: 'dark' | 'light'
    disabled?: 'disabled'
}

const BtnGeneral = ({ children, type, backgroundTheme }: BtnGeneralProps) => {
    return (
        <button className={(type === 'secondary' ? backgroundTheme === 'dark' ? 
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