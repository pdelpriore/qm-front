import React from "react";
import { useSelector } from "react-redux";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import useSignupForm from "../../hooks/form/signup/useSignupForm";
import { GoogleLogin } from "react-google-login";
import { IdClient } from "../../config/Security";
import "./signupForm.css";

const SignupForm = () => {
  const { loading } = useSelector(state => state.signup);
  const { inputs, handleInputChange, handleSubmit } = useSignupForm();
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicUserName">
            <Form.Label className="signup-text-family">
              {capitalizeFirst(strings.signup.USER_NAME)}
            </Form.Label>
            <Form.Control
              onChange={handleInputChange}
              value={inputs.name || ""}
              className="signup-placeholder"
              size="lg"
              name="name"
              type="text"
              placeholder={strings.signup.USER_NAME}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="signup-text-family">
              {capitalizeFirst(strings.signup.EMAIL)}
            </Form.Label>
            <Form.Control
              onChange={handleInputChange}
              value={inputs.email || ""}
              className="signup-placeholder"
              size="lg"
              name="email"
              type="email"
              placeholder={strings.signup.EMAIL}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicConfirmEmail">
            <Form.Label className="signup-text-family">
              {capitalizeFirst(strings.signup.CONFIRM_EMAIL)}
            </Form.Label>
            <Form.Control
              onChange={handleInputChange}
              value={inputs.confirmEmail || ""}
              className="signup-placeholder"
              size="lg"
              name="confirmEmail"
              type="email"
              placeholder={strings.signup.CONFIRM_EMAIL}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="signup-text-family">
              {capitalizeFirst(strings.signup.PASSWORD)}
            </Form.Label>
            <Form.Control
              onChange={handleInputChange}
              value={inputs.password || ""}
              className="signup-placeholder"
              size="lg"
              name="password"
              type="password"
              placeholder={strings.signup.PASSWORD}
            ></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button
            disabled={
              inputs.name === undefined ||
              inputs.name === "" ||
              inputs.email === undefined ||
              inputs.email === "" ||
              inputs.confirmEmail === undefined ||
              inputs.confirmEmail === "" ||
              inputs.password === undefined ||
              inputs.password === ""
            }
            className="signup-button"
            type="submit"
            variant="outline-dark"
          >
            <div className="signup-spinner">
              {loading && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              {loading ? (
                <div className="signup-loading-text">
                  {capitalizeFirst(strings.signup.BUTTON_TEXT_LOADING)}
                </div>
              ) : (
                <div>{capitalizeFirst(strings.signup.BUTTON_TEXT)}</div>
              )}
            </div>
          </Button>
        </Col>
      </Row>
      <Row className="mb-3" />
      <Row>
        <Col xs={12}>
          <GoogleLogin
            render={renderProps => (
              <Button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                variant="outline-dark"
                className="google-signup-button"
              >
                <div className="google-signup-icon" />
                <div className="google-signup-text">
                  {capitalizeFirst(strings.signupGoogle.BUTTON_TEXT)}
                </div>
              </Button>
            )}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default SignupForm;
