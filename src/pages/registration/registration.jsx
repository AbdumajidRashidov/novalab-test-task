import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Typography, Row, Form, Input, Button } from "antd";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Loader } from "../../components";

const { Title } = Typography;
const { Item } = Form;

export const Registration = () => {
  const [setToken] = useAuth(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegistration = async (evt) => {
    const res = await fetch(process.env.REACT_APP_API + "/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(evt),
    });

    localStorage.setItem("userData", JSON.stringify(evt));

    if (res.ok) {
      const token = await res.json();
      setLoading(true);
      return setToken(token);
    }

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
        <Title>Sign up</Title>

        <Form layout="vertical" onFinish={handleRegistration}>
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
            Sign up
          </Button>
        </Form>
        <Link style={{ marginTop: "20px" }} to="/signin">
          I have already registred
        </Link>
      </Row>
    </>
  );
};
