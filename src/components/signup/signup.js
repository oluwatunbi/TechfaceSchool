import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { auth } from "../../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./signup.css";

const Register = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    Lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (password !== confirmPassword) {
    //   alert("Password don't match");
    //   return;
    // }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;
      console.log("Usercraeted:", user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const { firstname, lastname, email, password, confirmPassword } = formData;

  return (
    <div>
      <Container>
        <Row>
          <Col md="4"></Col>
          <Col className="display-pod" md="4">
            <Modal show={true} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Register Here</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control
                      type="firstname"
                      onChange={handleInputChange}
                      name="firstname"
                      placeholder="Enter Firstname"
                      value={firstname}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control
                      type="lastname"
                      placeholder="Enter Lastname"
                      value={lastname}
                      name="lastname"
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      name="email"
                      onChange={handleInputChange}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      name="password"
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col md="4"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
