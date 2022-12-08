import classNames from 'classnames'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/icon_navbar.svg'
import BtnGeneral from "../BtnGeneral"
import Style from './Navbar.module.scss'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)


    return (
        <nav>
            <Link to='/' className={Style.nav__item} onClick={() => { setIsActive(!isActive) }}><img src={logo} alt='logo' /></Link>
            <ul className={!isActive ?
                classNames(Style.nav__menu) :
                classNames(Style.nav__menu, Style['nav__menu--active'])
            }>
                <li className={Style.nav__item}>
                    <Link to='/' onClick={() => { setIsActive(!isActive) }}>Home</Link>
                </li>
                <li className={Style.nav__item}>
                    <Link to='/pricing' className={Style.nav__item} onClick={() => { setIsActive(!isActive) }}>Pricing</Link>
                </li>
                <li className={Style.nav__item}>
                    <Link to='/about' className={Style.nav__item} onClick={() => { setIsActive(!isActive) }}>About</Link>
                </li>
                <li className={Style.nav__item}>
                    <Link to='/contact' className={Style.nav__item} onClick={() => { setIsActive(!isActive) }}>Contact</Link>
                </li>
                <li className={classNames(Style.nav__item, Style.nav__button)}>
                    <Link to='/invitation'><BtnGeneral btnType="primary">Schedule a Demo</BtnGeneral></Link>
                </li>
            </ul>
            <div className={!isActive ?
                classNames(Style.nav__hamburger) :
                classNames(Style.nav__hamburger, Style['nav__hamburger--active'])
            } onClick={() => { setIsActive(!isActive) }}>
                <span className={Style.hamburger__bar}></span>
                <span className={Style.hamburger__bar}></span>
                <span className={Style.hamburger__bar}></span>
            </div>
        </nav>
    )
}

export default Navbar