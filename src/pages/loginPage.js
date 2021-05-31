import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
// import { userError } from "../store/reducers/userReducer";

const LoginPage = () => {
  const error = useSelector((state) => state.users.error);
  const dispatch = useDispatch();
  const history = useHistory();

  const storedUser = useSelector((state) => state.users.user);
  useEffect(() => {
    if (storedUser) history.push("/work");
  }, [storedUser]);

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      min: "${label} must be between ${min} and ${max}",
    },
  };

  const callDispatch = (values) => {
    dispatch((state) => state.users.error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFinish = (values) => {
    callDispatch(values);
  };

  return (
    <div>
      <div className="login-header-wrapper">
        <div className="login__header">
          <img src="/logo.png" className="login__logo" />
          <div>
            <div className="login__title">User Management</div>
            <div className="login__title login__title--small">Login</div>
          </div>
        </div>
      </div>

      {error && (
        <div style={{ padding: "16px" }}>
          <div className="isobar__box isobar__box--error">{error.message}</div>
        </div>
      )}

      <div className="login__form-container">
        <div className="login__form">
          <Form
            onSubmit={handleSubmit}
            onFinish={handleFinish}
            layout="vertical"
            size="large"
            validateMessages={validateMessages}
          >
            <Form.Item
              name={"name"}
              label="Email address"
              hasFeedback
              rules={[
                {
                  type: "email",
                  required: true,
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name={"password"}
              label="Password"
              hasFeedback
              rules={[
                {
                  required: true,
                  min: 4,
                },
              ]}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="button button--full-width"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
