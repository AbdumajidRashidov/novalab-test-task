import { Avatar, Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";

export const Profile = () => {
  const [localData] = useState(JSON.parse(localStorage.getItem("userData")));

  return (
    <Card hoverable style={{ width: 300 }}>
      <Avatar size={64} icon={<UserOutlined />} />
      <h2>Email:{localData.email}</h2>
      <p>password:{localData.password}</p>
    </Card>
  );
};
