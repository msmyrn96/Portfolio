import React from "react";
import "./Sidebar.scss";
import menu from "../../../assets/menu 1.png";
import { ReactComponent as CloseIcon} from "../../../assets/icon-close.svg";



const SidebarComponent = ({ isOpen, toggleSidebar,options,onClickOption }) => {
    const isSidebarOpenVariable = `sidebar ${isOpen ? "open" : ""}`
    const hasOverlayVariable = `sidebar ${isOpen ? "overlay" : ""}`

  return (
    <div className='d-block d-md-none d-lg-none d-block h-100 me-5'>
        
        <img
        style={{position: "relative",
                top: "50%",
                transform:"translateY(-50%)",
                height:"30px"
            }}
            src={menu}
            alt='menu'
            onClick={toggleSidebar}
        />
        
        <div className={isSidebarOpenVariable}>
            <div className={hasOverlayVariable} onClick={()=> toggleSidebar()}></div>
            <div className="close-btn" onClick={toggleSidebar}>
                <CloseIcon />
            </div>

            {options.map((item) => {
            return (
              <li
                className="ms-4 mb-4"
                id={item}
                style={{ listStyle: "none" }}
                onClick={() => {
                  onClickOption(item);
                  toggleSidebar();
                }}
              >
                <h2
                  name={item}
                  style={{ cursor: "pointer" }}
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