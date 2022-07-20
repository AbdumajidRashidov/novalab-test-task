import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Dropdown, Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./../../../../hooks/useAuth";

const { Header: AntHeader } = Layout;
export const Header = () => {
  const navigate = useNavigate();

  const handleClick = (evt) => {
    navigate(evt.key);
  };

  const items = [
    { label: "Home", key: "/" }, // remember to pass the key prop
    { label: "Profile", key: "/profile" }, // which is required
  ];
  const [, setToken] = useAuth();

  const handleLogOut = () => {
    setToken();
    navigate("/");
  };

  const menu = (
    <Menu
      onClick={handleLogOut}
      items={[
        {
          key: "1",
          label: "Logout",
        },
      ]}
    />
  );

  return (
    <AntHeader>
      <Row>
        <Col md={23}>
          <Menu
            theme="dark"
            mode="horizontal"
            onClick={handleClick}
            items={items}
          />
        </Col>
        <Col md={1}>
          <Dropdown overlay={menu} placement="bottomLeft">
            <Avatar size={42} icon={<UserOutlined />} />
          </Dropdown>
        </Col>
      </Row>
    </AntHeader>
  );
};
