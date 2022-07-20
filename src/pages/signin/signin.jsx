import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Typography, Row, Form, Input, Button } from "antd";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components";

const { Title } = Typography;
const { Item } = Form;

export const SignIn = () => {
  const [setToken] = useAuth(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (evt) => {
    fetch(process.env.REACT_APP_API + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(evt),
    })
      .then((res) => res.json())
      .then((token) => {
        navigate("/");
        setLoading(true);
        return setToken(token);
      });
    localStorage.setItem("userData", JSON.stringify(evt));

    setError(true);
  };

  return loading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Loader />
    </div>
  ) : (
    <>
      <Row
        justify="center"
        align="middle"
        style={{ flexDirection: "column", height: "100vh" }}
      >
        <Title>Sign in</Title>

        <Form layout="vertical" onFinish={handleLogin}>
          <Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              status={error && "error"}
              prefix={<UserOutlined />}
              placeholder="Username"
              defaultValue={"eve.holt@reqres.in"}
            />
          </Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              status={error && "error"}
              prefix={<LockOutlined />}
              placeholder="Password"
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
        </Form>
      </Row>
    </>
  );
};
