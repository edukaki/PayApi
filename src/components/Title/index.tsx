import classNames from "classnames"
import style from './Title.module.scss'

type TitleProps = {
    children: string
    textColor?: 'blue' | 'white'
    type: 'main' | 'section' | 'common'
}

const Title = ({ children, type, textColor }: TitleProps) => {
    if (type === 'main') {
        return (
            <h1 className={(textColor === 'blue' ? 
                classNames(style.general,style.main,style['main--blue']) :
                classNames(style.general,style.main,style['main--white'])
            )}>{children}</h1>
        )
    } else if(type === 'section'){
        return (
            <h2 className={(textColor === 'blue' ? 
            classNames(style.general,style.section,style['section--blue']) :
            classNames(style.general,style.section,style['section--white'])
        )}>{children}</h2>
        )
    }else{
        return(
            <h3 className={classNames(style.general,style.common)}>{children}</h3>
        )
    }
}

export default Title