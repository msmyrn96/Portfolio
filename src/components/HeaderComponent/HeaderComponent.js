import { Container } from 'react-bootstrap';
import profileImage from '../../assets/profile.jpg';
import { useEffect, useState } from 'react';
import SidebarComponent from './SidebarComponent/SidebarComponent';
import { useResponsive } from 'ahooks';
import './styles.scss';
import { list } from './constants';

const HeaderComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { md } = useResponsive();

    const clickSection = (item) => {
        props.onClick(item);
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [md]);

    return (
        <Container
            style={{
                height: '6.25rem',
                zIndex: '9999'
            }}
            className="d-flex p-0 m-0 justify-content-between w-100 main-header-container"
            fluid
        >
            <div className="d-flex h-100 ms-5 align-items-center">
                <img
                    alt="cover"
                    style={{
                        width: '4rem',
                        height: '4rem',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        position: 'relative'
                    }}
                    src={profileImage}
                />

                <div className="ms-2 d-lg-flex d-md-none d-sm-flex d-none header-name ">
                    <h4
                        className="fw-bold mb-0"
                        style={{ lineHeight: '6.25rem' }}
                    >
                        Emmanouil Smyrnakis
                    </h4>
                </div>
                <div className="ms-2 d-lg-none d-md-flex d-sm-none d-none header-name">
                    <h4
                        className="fw-bold mb-0"
                        style={{ lineHeight: '6.25rem' }}
                    >
                        E.S.
                    </h4>
                </div>
            </div>
            <div>
                <ul className="d-none d-md-flex d-lg-flex justify-content-between me-3 mb-0 mt-0">
                    {list.map((item, index) => {
                        return (
                            <li
                                key={index}
                                id={item}
                                style={{
                                    listStyle: 'none',
                                    height: '6.25rem',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                                className="me-4"
                                onClick={() => {
                                    clickSection(item);
                                }}
                            >
                                <h4
                                    className="list-item-header"
                                    name={item}
                                    style={{
                                        cursor: 'pointer',
                                        margin: 'auto'
                                    }}
                                >
                                    {item}
                                </h4>
                            </li>
                        );
                    })}
                </ul>
                <SidebarComponent
                    isOpen={isOpen}
                    toggleSidebar={toggleSidebar}
                    options={list}
                    onClickOption={clickSection}
                />
            </div>
        </Container>
    );
};

export default HeaderComponent;
