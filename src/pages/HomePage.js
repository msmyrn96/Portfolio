import react from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import HeaderComponent from "../components/HeaderComponent";
import profileImage from "../assets/profile.jpg";
import ImageAndTitleComponent from "../components/ImageAndTitleComponent";
import AboutComponent from "../components/AboutComponent";
import WorkComponent from "../components/WorkComponent";
import ExperienceComponent from "../components/ExperienceComponent";

const HomePage = () => {

  return (
    <Container className='w-100 p-0 m-0' fluid>
      <HeaderComponent />
      <ImageAndTitleComponent id="Home" />
      <AboutComponent id="About"/>
      <WorkComponent  id="Work"/>
      <ExperienceComponent  id="Experience"/>
    </Container>
  );
};

export default HomePage;
