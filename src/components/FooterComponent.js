import { Container } from 'react-bootstrap';
import facebook from '../assets/facebook 1.png';
import instagram from '../assets/instagram 1.png';
import linkedin from '../assets/linkedin 1.png';
import twitter from '../assets/twitter 1.png';

const FooterComponent = () => {
    return (
        <Container className="w-100 p-0 m-0" fluid>
            <div className="margin-big text-center">
                <div className="d-flex social justify-content-center mb-3">
                    <a href="https://www.facebook.com/manosmyrnakis/">
                        <img className="me-4" src={facebook} alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/manos.smyrnakis/">
                        <img className="me-4" src={instagram} alt="instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/emmanouil-smyrnakis/">
                        <img className="me-4" src={linkedin} alt="linkedin" />
                    </a>
                    <a href="https://twitter.com/emmanouilsmyrn1">
                        <img src={twitter} alt="twitter" />
                    </a>
                </div>
                <div className="mb-4">
                    <h5 className="fw-bold">
                        ©2021 Proudly designed and created by Emmanouil
                        Smyrnakis
                    </h5>
                </div>
            </div>
        </Container>
    );
};

export default FooterComponent;
