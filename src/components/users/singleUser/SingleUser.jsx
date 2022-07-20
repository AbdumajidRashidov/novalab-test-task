import { Avatar, Button, Card, Form, Image, Input, message, Modal } from "antd";
import Item from "antd/lib/list/Item";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const SingleUser = () => {
  const param = useParams();
  const [user, setUser] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    fetch(process.env.REACT_APP_API + `/api/users/${param.id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data);
      })
      .catch((error) => console.log(error));
  }, [param.id]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const success = () => {
    message.success("This is a success message");
  };

  const handleSubmit = (evt) => {
    fetch(process.env.REACT_APP_API + `/api/users/${param.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(evt),
    })
      .then((res) => res.json())
      .then((token) => {
        console.log(token);
        success();
        setIsModalVisible(false);
      });
  };

  return (
    <Card hoverable bordered={true} style={{ width: 300, margin: "25px" }}>
      <Avatar
        size={100}
        src={<Image src={user?.avatar} style={{ width: 100 }} />}
        style={{ margin: "20px auto" }}
      />
      <p>{user?.email}</p>
      <p>
        {user?.first_name} {user?.last_name}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quas
        impedit quis optio error iusto inventore esse iure ullam sed. Magnam
        mollitia quos earum alias voluptatibus atque dolores. Qui, praesentium.
      </p>
      <Button type="primary" onClick={showModal}>
        Change info
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <Item
            label="Change name"
            name="name"
            rules={[
              {
                type: "text",
              },
              {
                required: true,
                message: "Please input your Text!",
              },
            ]}
          >
            <Input placeholder="Username" />
          </Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </Card>
  );
};
