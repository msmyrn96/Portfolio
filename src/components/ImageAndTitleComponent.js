import { Col, Row, Button } from 'react-bootstrap';
import profileImage from '../assets/profile.jpg';
import Lottie from 'react-lottie';
import animationData from '../lotties/coding.json';

const ImageAndTitleComponent = () => {
    const title = ['Creating.', 'Developing.', 'Delivering.'];

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Row className="h-100 d-none d-sm-none d-md-flex">
            <Col className="col-6 ms-4 mt-5">
                {/* <img
                    alt="profile"
                    className="shadowbox col-12 br10"
                    src={profileImage}
                /> */}
                <Lottie options={defaultOptions} height={500} width={500} />
            </Col>

            <Col className="align-self-center">
                <div className="">
                    {title.map((word) => {
                        return (
                            <div>
                                <div
                                    className="h_00"
                                    style={{
                                        color: 'rgb(0, 148, 198)',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    <h1 className="fw-bold">{word}</h1>
                                </div>
                            </div>
                        );
                    })}
                    <Button
                        variant="none"
                        className="text-white basicColor br10 mt-4"
                    >
                        <h4 className="p-2 m-0">Experience my work</h4>
                    </Button>
                </div>
            </Col>

            <h1
                className="mt-4"
                style={{
                    color: 'rgb(0, 148, 198)',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.5rem'
                }}
            >
                Hi, I'm
                <span className="fw-bold" style={{ color: '#ccc9dc' }}>
                    Emmanouil
                </span>
                , but you can call me
                <span className="fw-bold" style={{ color: '#ccc9dc' }}>
                    Manos
                </span>
                .
            </h1>
        </Row>
    );
};

export default ImageAndTitleComponent;
