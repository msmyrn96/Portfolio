import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import ImageAndTitleComponent from '../components/ImageAndTitleComponent/ImageAndTitleComponent';
import AboutComponent from '../components/AboutComponent/AboutComponent';
import WorkComponent from '../components/WorkComponent/WorkComponent';
import ExperienceComponent from '../components/ExperienceComponent/ExperienceComponent';
import { useRef } from 'react';
import ContactComponent from '../components/ContactComponent/ContactComponent';
import FooterComponent from '../components/FooterComponent/FooterComponent';
import QuoteComponent from '../components/QuoteComponent/QuoteComponent';
import { ReactComponent as TopArrowIcon } from '../assets/top-arrow.svg';
import './styles.scss';
import { useResponsive } from 'ahooks';
import { backToTopText } from './constants';

const HomePage = () => {
    const Ref1 = useRef(null);
    const Ref2 = useRef(null);
    const Ref3 = useRef(null);
    const Ref4 = useRef(null);
    const Ref5 = useRef(null);
    const { sm, md } = useResponsive();

    const isSmallScreens = !md;
    const isSmallerScreens = !sm;

    const scroolToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const executeScroll = (myRef) => {
        console.log(myRef);

        switch (myRef) {
            case 'Home':
                Ref1.current.scrollIntoView({
                    block: 'nearest',
                    behavior: 'smooth'
                });
                break;
            case 'About':
                Ref2.current.scrollIntoView({
                    block: 'nearest',
                    behavior: 'smooth'
                });
                break;
            case 'Projects':
                Ref3.current.scrollIntoView({
                    block: 'nearest',
                    behavior: 'smooth'
                });
                break;
            case 'Experience':
                Ref4.current.scrollIntoView({
                    block: 'nearest',
                    behavior: 'smooth'
                });
                break;
            case 'Contact':
                Ref5.current.scrollIntoView({
                    block: 'nearest',
                    behavior: 'smooth'
                });
                break;
            default:
                break;
        }
    };

    return (
        <Container
            style={{ overflowX: 'hidden' }}
            className="w-100 p-0 m-0 homepage-container"
            fluid
        >
            <HeaderComponent
                onClick={(myRef) => {
                    executeScroll(myRef);
                }}
            />
            {isSmallScreens && (
                <div
                    className={`top-arrow-container ${
                        isSmallerScreens ? 'different-height' : ''
                    }`}
                    onClick={scroolToTop}
                >
                    <TopArrowIcon
                        height={40}
                        width={40}
                        className="top-arrow-icon"
                    />
                    <h6 className="back-top-text">{backToTopText}</h6>
                </div>
            )}
            <div className="content-wrapper" ref={Ref1}>
                <ImageAndTitleComponent scrollIntoView={executeScroll} />
            </div>
            <div className="content-wrapper" ref={Ref2}>
                <AboutComponent />
            </div>
            <div className="content-wrapper">
                <QuoteComponent />
            </div>
            <div className="content-wrapper" ref={Ref3}>
                <WorkComponent />
            </div>
            <div className="content-wrapper" ref={Ref4}>
                <ExperienceComponent />
            </div>
            <div className="content-wrapper" ref={Ref5}>
                <ContactComponent />
            </div>
            <div className="content-wrapper">
                <FooterComponent />
            </div>
        </Container>
    );
};

export default HomePage;
