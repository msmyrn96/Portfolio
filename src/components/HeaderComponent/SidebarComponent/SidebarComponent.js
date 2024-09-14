import React from 'react';
import './styles.scss';
import { ReactComponent as CloseIcon } from '../../../assets/icon-close.svg';
import { ReactComponent as BurgerMenuIcon } from '../../../assets/burger-menu.svg';
import profileImage from '../../../assets/profile.jpg';

import { useResponsive } from 'ahooks';

const SidebarComponent = ({
    isOpen,
    toggleSidebar,
    options,
    onClickOption
}) => {
    const { sm } = useResponsive();

    const isMobileStyles = !sm ? 'fullscreen' : '';
    const isSidebarOpenVariable = `sidebar ${
        isOpen ? `open ${isMobileStyles}` : ''
    }`;
    const hasOverlayVariable = `${isOpen ? 'overlay' : ''}`;

    return (
        <div className="d-flex d-md-none d-lg-none d-block h-100 me-5 hamburger-container">
            <BurgerMenuIcon
                className="burger-menu"
                height={30}
                width={30}
                onClick={toggleSidebar}
            />
            <div
                className={hasOverlayVariable}
                onClick={() => toggleSidebar()}
            ></div>
            <div className={isSidebarOpenVariable}>
                <div className="sidebar-header">
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

                        <div className="ms-2 d-flex header-name-sidebar">
                            <h6 className="fw-bold text-white mb-0">
                                <div>Emmanouil</div>
                                <div>Smyrnakis</div>
                            </h6>
                        </div>
                    </div>
                    <div className="close-btn" onClick={toggleSidebar}>
                        <CloseIcon height={25} width={25} />
                    </div>
                </div>

                {options.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="mb-4 list-item-wrapper"
                            id={item}
                            style={{ listStyle: 'none' }}
                            onClick={() => {
                                onClickOption(item);
                                toggleSidebar();
                            }}
                        >
                            <h2
                                className="list-item"
                                name={item}
                                style={{ cursor: 'pointer' }}
                            >
                                {item}
                            </h2>
                        </li>
                    );
                })}
            </div>
        </div>
    );
};

export default SidebarComponent;
