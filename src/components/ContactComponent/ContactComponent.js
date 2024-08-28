import { Container, Form, Modal, Button } from 'react-bootstrap';
import send from '../../assets/Group.png';
import { useRef, useState } from 'react';
import './styles.scss';
import { sumbitEmail } from '../../hooks/helpers';
import { TypeAnimation } from 'react-type-animation';
import { useResponsive } from 'ahooks';
import { defaultOptions } from './constants';
import Lottie from 'react-lottie';

const ContactComponent = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { sm, md } = useResponsive();
    const isSmallScreens = !md;
    const isExtraSmallScreens = !sm;
    const formRef = useRef();

    const handleReset = () => {
        document.getElementById('form').reset();
        setName('');
        setSubject('');
        setEmail('');
        setMessage('');
        handleClose();
    };

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'from_name':
                setName(e.target.value);
                break;
            case 'subject':
                setSubject(e.target.value);
                break;
            case 'email_from':
                setEmail(e.target.value);
                break;
            case 'message':
                setMessage(e.target.value);
                break;
            default:
                break;
        }
    };

    return (
        <Container className="w-100 p-0 m-0 big-container" fluid>
            <div className="margin-big fw-bold secondary-color pt-5 pb-5 contact-container">
                <h1 className="fw-bold text-white text-center">Contact</h1>
                <div
                    className={`mt-5 animation-form-wrapper ${
                        isExtraSmallScreens
                            ? 'extra-small-screens'
                            : isSmallScreens
                            ? 'small-screens'
                            : ''
                    }`}
                >
                    <div
                        className={`form-wrapper  ${
                            isExtraSmallScreens
                                ? 'extra-small-screens'
                                : isSmallScreens
                                ? 'small-screens'
                                : ''
                        }`}
                    >
                        <Form
                            className="form-container"
                            id="form"
                            ref={formRef}
                        >
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    name="from_name"
                                    className="inputContact"
                                    type="name"
                                    placeholder="Enter your name"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    className="inputContact"
                                    type="name"
                                    placeholder="Enter your email"
                                    name="email_from"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Subject</Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    className="inputContact"
                                    type="name"
                                    placeholder="Enter your subject"
                                    name="subject"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    onChange={handleChange}
                                    className="inputContact"
                                    as="textarea"
                                    rows={2}
                                    placeholder="Type your message here..."
                                    name="message"
                                />
                            </Form.Group>
                        </Form>
                        <div
                            style={{ cursor: 'pointer' }}
                            className="circleButton"
                            onClick={() =>
                                sumbitEmail(
                                    formRef,
                                    {
                                        email: email,
                                        name: name,
                                        subject: subject,
                                        message: message
                                    },
                                    handleShow
                                )
                            }
                        >
                            <img src={send} alt="send" />
                        </div>
                    </div>

                    <div
                        className={`col-6 email-animation-container  ${
                            isExtraSmallScreens
                                ? 'extra-small-screens'
                                : isSmallScreens
                                ? 'small-screens'
                                : ''
                        }`}
                    >
                        <div
                            className={`type-animation-wrapper ${
                                isExtraSmallScreens
                                    ? 'extra-small-screens'
                                    : isSmallScreens
                                    ? 'small-screens'
                                    : ''
                            }`}
                        >
                            <h1
                                className={`type-animation ${
                                    isExtraSmallScreens
                                        ? 'extra-small-screens'
                                        : isSmallScreens
                                        ? 'small-screens'
                                        : ''
                                }`}
                            >
                                Let's have{' '}
                                <TypeAnimation
                                    sequence={[
                                        ' a quick chat',
                                        1000,
                                        'a dive into some ideas',
                                        1000,
                                        ' a coffee first',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={30}
                                    className='"secondary-text'
                                    repeat={Infinity}
                                />
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center "></div>
            </div>

            <Modal
                className="text-center modal-container"
                show={show}
                onHide={handleClose}
            >
                <Modal.Header>
                    <Modal.Title>Email was sent!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <Lottie
                        style={{
                            width: '30%',
                            height: '30%'
                        }}
                        options={defaultOptions}
                    />
                    <div className="mt-2">Thank you for contacting me!</div>
                    You will receive a reply shortly!
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <Button className="close-button" onClick={handleReset}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default ContactComponent;
