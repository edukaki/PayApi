import {ReactComponent as Tesla} from '../../assets/shared/desktop/tesla.svg'
import {ReactComponent as Microsoft} from '../../assets/shared/desktop/microsoft.svg'
import {ReactComponent as Hewlett} from '../../assets/shared/desktop/hewlett-packard.svg'
import {ReactComponent as Oracle} from '../../assets/shared/desktop/oracle.svg'
import {ReactComponent as Google} from '../../assets/shared/desktop/google.svg'
import {ReactComponent as Nvidia} from '../../assets/shared/desktop/nvidia.svg'
import { v4 as uuidv4 } from 'uuid'
import style from './ClientGallery.module.scss'

type ClientGalleryProps = {
  color: 'dark' | 'light'
}

const ClientGallery = ({color}: ClientGalleryProps) => {

  const gallery = [Tesla,Microsoft,Hewlett,Oracle,Google,Nvidia]

  return (
    <div className={style.gallery}>
      {gallery.map(Brand => (
        <Brand fill={(color === 'dark' ? '#36536b' : '#fbfcfe')} key={uuidv4()} />
      ))}
    </div>
  )
}

export default ClientGallery