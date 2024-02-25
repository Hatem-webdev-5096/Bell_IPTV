import styles from "./Navbar.module.css";
import Button from "../UI/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" w={100}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            className={styles.logo}
            src={require("../../images/logo/bell logo.png")}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button classNameOne="button" classNameTwo="light" text="Pricing" to="#pricing"/>
            <Button
              classNameOne="button"
              classNameTwo="light"
              text="Contact Us"
              to="#support"
            />
            <Button
              classNameOne="button"
              classNameTwo="heavy"
              text="Get Started"
              to="https://wa.me/17789010266"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
