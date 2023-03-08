import React from 'react';
import classNames from 'classnames';
import CallAction from '../../components/CallAction';
import ClientGallery from '../../components/ClientGallery';
import FormQuestion from '../../components/FormQuestion';
import Title from '../../components/Title';
import Style from '../styles/Pages.module.scss';
import StyleContact from './Contact.module.scss';

const Contact = () => {
  return (
    <main className={Style['main__background--generic']}>
      <div
        className={classNames(
          Style.gallery,
          Style.gallery__secondary,
          StyleContact.main__title,
        )}
      >
        <Title
          type="main"
          textColor="blue"
        >{`Submit a help request and we’ll get in touch shortly.`}</Title>
        <div className={classNames(StyleContact.form__client)}>
          <FormQuestion />
          <div>
            <Title type="section" textColor="blue">
              Join the thousands of innovators already building with us
            </Title>
            <ClientGallery backgroundTheme="light" />
          </div>
        </div>
        <CallAction callText="Ready to start?" />
      </div>
    </main>
  );
};

export default Contact;
