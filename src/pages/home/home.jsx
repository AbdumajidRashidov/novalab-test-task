import { Col, Layout, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Loader, UserCard } from "../../components";
import { useEffect, useState } from "react";

export const Home = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(process.env.REACT_APP_API + "/api/users?page=1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data.data);
        if (data.data.length > 0) {
          setLoading(false);
        }
      });
  }, []);

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
    <Layout>
      <Content>
        <Row>
          <Col span={12}>
            <div style={{ padding: "30px" }}>
              <h1 style={{ fontSize: "44px" }}>
                Main section of the site, may contain static text and users in
                api
              </h1>
            </div>
          </Col>
        </Row>
        <Row>
          {users.map((user) => {
            return (
              <Col span={6} key={user.id}>
                <UserCard user={user} />
              </Col>
            );
          })}
        </Row>
      </Content>
    </Layout>
  );
};
