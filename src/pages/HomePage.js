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

const HomePage = () => {
    const Ref1 = useRef(null);
    const Ref2 = useRef(null);
    const Ref3 = useRef(null);
    const Ref4 = useRef(null);
    const Ref5 = useRef(null);

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
            className="w-100 p-0 m-0"
            fluid
        >
            <HeaderComponent
                onClick={(myRef) => {
                    executeScroll(myRef);
                }}
            />
            <div ref={Ref1}>
                <ImageAndTitleComponent scrollIntoView={executeScroll} />
            </div>
            <div ref={Ref2}>
                <AboutComponent />
            </div>
            <div>
                <QuoteComponent />
            </div>
            <div ref={Ref3}>
                <WorkComponent />
            </div>
            <div ref={Ref4}>
                <ExperienceComponent />
            </div>
            <div ref={Ref5}>
                <ContactComponent />
            </div>
            <div>
                <FooterComponent />
            </div>
        </Container>
    );
};

export default HomePage;
