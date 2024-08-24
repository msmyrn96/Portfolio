import React from 'react';
import './styles.scss';
import menu from '../../../assets/menu 1.png';
import { ReactComponent as CloseIcon } from '../../../assets/icon-close.svg';
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
            <img
                style={{
                    position: 'relative',
                    height: '25px',
                    cursor: 'pointer'
                }}
                src={menu}
                alt="menu"
                onClick={toggleSidebar}
            />
            <div
                className={hasOverlayVariable}
                onClick={() => toggleSidebar()}
            ></div>
            <div className={isSidebarOpenVariable}>
                <div className="close-btn" onClick={toggleSidebar}>
                    <CloseIcon height={25} width={25} />
                </div>

                {options.map((item) => {
                    return (
                        <li
                            className="ms-4 mb-4"
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
