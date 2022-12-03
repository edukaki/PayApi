import classNames from "classnames"
import Style from './Paragraph.module.scss'

type ParagraphProps = {
    children: String
    textColor: 'white' | 'blue'
}

const Paragraph = ({ children, textColor }: ParagraphProps) => {
    return (
        <div className={(textColor === 'white' ? 
        classNames(Style.text,Style.white) :
        classNames(Style.text,Style.blue))}>
            <p>
                {children}
                </p>
        </div>
    )
}

export default Paragraph
