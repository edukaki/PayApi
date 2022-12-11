import classNames from "classnames";
import CallAction from "../../components/CallAction";
import ClientGallery from "../../components/ClientGallery";
import FormQuestion from "../../components/FormQuestion";
import Title from "../../components/Title";
import Style from "../styles/Pages.module.scss";

const Contact = () => {
    return (
        <main className={Style["main__background--generic"]}>
            <div className={Style.gallery}>
                <div className={classNames(Style.gallery, Style.gallery__secondary)}>
                    <Title
                        type="main"
                        textColor="blue"
                    >{`Submit a help request and we’ll get in touch shortly.`}</Title>
                    <FormQuestion />
                    <Title type="section" textColor="blue">Join the thousands of innovators already building with us</Title>
                    <ClientGallery backgroundTheme="light" />
                    <CallAction callText="Ready to start?" />
                </div>
            </div>
        </main>
    );
};

export default Contact;
