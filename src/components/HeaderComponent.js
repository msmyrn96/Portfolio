import react from "react";
import { Container } from "react-bootstrap";
import profileImage from "../assets/profile.jpg";
import menu from "../assets/menu 1.png";

const HeaderComponent = (props) => {
  const list = ["Home", "About", "Work", "Experience", "Contact"];

  const clickSection = (item) => {
    console.log(item);
    props.onClick(item);
  };

  return (
    <Container
      style={{ backgroundColor: "#0094C6", height: "6.25rem" }}
      className='d-flex p-0 m-0 justify-content-between w-100 text-white'
      fluid
    >
      <div className='d-flex h-100 ms-4'>
        <img
          style={{
            width: "4rem",
            height: "4rem",
            objectFit: "cover",
            borderRadius: "50%",
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          src={profileImage}
        />

        <div className='ms-2 d-lg-block d-md-none d-sm-none d-none'>
          <h4 style={{ lineHeight: "6.25rem" }}>Emmanouil Smyrnakis</h4>
        </div>
        <div className='ms-2 d-lg-none d-md-block d-sm-block d-block'>
          <h4 style={{ lineHeight: "6.25rem" }}>E.S.</h4>
        </div>
      </div>
      <div>
        <ul className='d-none d-md-flex d-lg-flex justify-content-between'>
          {list.map((item) => {
            return (
              <li
                id={item}
                style={{ listStyle: "none" }}
                className='me-4'
                onClick={() => {
                  clickSection(item);
                }}
              >
                <h4
                  name={item}
                  style={{ lineHeight: "6.25rem", cursor: "pointer" }}
                >
                  {item}
                </h4>
              </li>
            );
          })}
        </ul>
        <div className='d-block d-md-none d-lg-none d-block h-100 me-5'>
          <img
          style={{position: "relative",
                top: "50%",
                  transform:"translateY(-50%)"}}
            src={menu}
            alt='menu'
          />
        </div>
      </div>
    </Container>
  );
};

export default HeaderComponent;
