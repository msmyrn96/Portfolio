import { Container } from 'react-bootstrap';
import { ReactComponent as Instagram } from '../../assets/icons8-instagram.svg';
import { ReactComponent as Facebook } from '../../assets/icons8-facebook.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons8-linkedin.svg';
import { ReactComponent as Twitter } from '../../assets/icons8-x.svg';
import './styles.scss';
import { copyrights } from './constants';

const FooterComponent = () => {
    return (
        <Container className="w-100 p-0 m-0" fluid>
            <div className="text-center footer-container">
                <div className="d-flex social justify-content-center mb-3">
                    <a
                        href="https://www.facebook.com/manosmyrnakis/"
                        className="icons"
                    >
                        <Facebook height={40} width={40} />
                    </a>
                    <a
                        href="https://www.instagram.com/manos.smyrnakis/"
                        className="icons"
                    >
                        <Instagram height={40} width={40} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/emmanouil-smyrnakis/"
                        className="icons"
                    >
                        <LinkedIn height={40} width={40} />
                    </a>
                    <a
                        href="https://twitter.com/emmanouilsmyrn1"
                        className="icons"
                    >
                        <Twitter height={40} width={40} />
                    </a>
                </div>
                <div className="mb-4 copyright-text">
                    <h5 className="fw-bold">{copyrights}</h5>
                </div>
            </div>
        </Container>
    );
};

export default FooterComponent;
