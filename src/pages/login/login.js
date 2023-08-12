import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Register from "../../components/signup/signup.js";
import { auth } from "../../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./login.css";
import { useState, useRef } from "react";

const Login = () => {
  const [showRegistermodal, setShowRegistermodal] = useState(false);
  const handleShowRegistermodal = () => {
    setShowRegistermodal(true);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const formRef = useRef(null); // create a ref for the form element

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Enter email and password");
    } else {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        setEmail("");
        setPassword("");
        console.log(formRef.current);
        formRef.current.reset(); // Reset the form after successfully signin
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      {showRegistermodal && (
        <Register handleClose={() => setShowRegistermodal(false)} />
      )}
      <Container>
        <Row className="login-frame">
          <Col md="6"></Col>
          <Col className="mb-2" md="6">
            <h2> LOG IN</h2>
            <Form ref={formRef}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  ref={formRef}
                  onChange={handleEmailChange}
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
                  ref={formRef}
                  onChange={handlePasswordChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button
                variant="primary"
                type="button"
                onClick={handleSubmit}
                className="m-3"
              >
                Sign in
              </Button>
              <Button
                variant="primary"
                type="submit"
                onClick={handleShowRegistermodal}
              >
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
