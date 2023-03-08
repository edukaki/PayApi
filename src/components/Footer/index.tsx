import React from 'react';
import Style from './Footer.module.scss';
import logo from '../../assets/img/icon_footer.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as Facebook } from '../../assets/img/shared/desktop/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/img/shared/desktop/twitter.svg';
import { ReactComponent as Linkedin } from '../../assets/img/shared/desktop/linkedin.svg';

const Footer = () => {
  return (
    <footer>
      <div className={Style.logo__menu}>
        <Link to="/" className={Style.logo}>
          <img src={logo} alt="logo" />
        </Link>
        <ul className={Style.menu}>
          <li className={Style.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={Style.item}>
            <Link to="/pricing" className={Style.item}>
              Pricing
            </Link>
          </li>
          <li className={Style.item}>
            <Link to="/about" className={Style.item}>
              About
            </Link>
          </li>
          <li className={Style.item}>
            <Link to="/contact" className={Style.item}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <ul className={Style.social}>
        <li>
          <Link to="">
            <Facebook />
          </Link>
        </li>
        <li>
          <Link to="">
            <Twitter />
          </Link>
        </li>
        <li>
          <Link to="">
            <Linkedin />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
