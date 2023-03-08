import React from 'react';
import MainCard from '../MainCard';
import Style from './Facilities.module.scss';
import terminal from '../../assets/img/home/desktop/illustration-easy-to-implement.svg';
import mockup from '../../assets/img/home/desktop/illustration-simple-ui.svg';
import financeIcon from '../../assets/img/home/desktop/icon-personal-finances.svg';
import bankingIcon from '../../assets/img/home/desktop/icon-banking-and-coverage.svg';
import cardIcon from '../../assets/img/home/desktop/icon-consumer-payments.svg';
import classNames from 'classnames';
import CallAction from '../CallAction';

const Facilities = () => {
  return (
    <>
      <aside className={classNames(Style.gallery, Style.gallery__main)}>
        <MainCard
          facilitiesImage={terminal}
          facilitiesImageAlt="terminal"
          imageType="image"
          titleText="Easy to implement"
          paragraphText="Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease."
        />

        <MainCard
          facilitiesImage={mockup}
          facilitiesImageAlt="Ui Mockup"
          imageType="image"
          titleText="Simple UI & UX"
          paragraphText="Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion."
        />

        <div className={classNames(Style.gallery, Style.gallery__secondary)}>
          <MainCard
            facilitiesImage={financeIcon}
            facilitiesImageAlt="finance icon"
            imageType="icon"
            titleText="Personal Finances"
            paragraphText="Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. "
          />
          <MainCard
            facilitiesImage={bankingIcon}
            facilitiesImageAlt="banking"
            imageType="icon"
            titleText="Banking & Coverage"
            paragraphText="With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts."
          />
          <MainCard
            facilitiesImage={cardIcon}
            facilitiesImageAlt="card"
            imageType="icon"
            titleText="Consumer Payments"
            paragraphText="It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account."
          />
        </div>
        <CallAction callText="Ready to start?" />
      </aside>
    </>
  );
};

export default Facilities;
