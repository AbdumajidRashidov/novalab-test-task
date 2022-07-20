import { Avatar, Card } from "antd";
import { Link } from "react-router-dom";

export const UserCard = ({ user }) => {
  return (
    <Link to={`users/${user.id}`}>
      <Card hoverable bordered={true} style={{ width: 300, margin: "25px" }}>
        <Avatar size={100} src={user.avatar} />
        <p>{user.email}</p>
        <p>
          {user.first_name} {user.last_name}
        </p>
      </Card>
    </Link>
  );
};
