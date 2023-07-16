import { useState } from "react";
import { Typography, Space, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";

const { Text, Title } = Typography;

// eslint-disable-next-line react/prop-types
function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        padding: 32,
        display: "flex",
        alignItems: "center",
        height: "93.2vh",
        width: "96.65vw",
        margin: "auto",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage: "url('src/Welcome-to-Night-City.jpg')",
      }}
    >
      <Title strong style={{ color: "white", textShadow: "2px 2px #ff0000", fontSize: "40px" }}>Welcome to Night City, V!</Title>
      <Space direction="vertical">
        <Space direction="vertical">
          <div>
            <Text style={{ color: "black", fontWeight: "bold", textShadow: "2px 2px #ffff00" }}>
              USERNAME:
            </Text>
          </div>
          <Input
            prefix={<UserOutlined />}
            placeholder="Johnny Silverhand"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Space>
        <Space direction="vertical">
          <div>
            <Text style={{ color: "black", fontWeight: "bold", textShadow: "2px 2px #ffff00" }}>
              PASSWORD:
            </Text>
          </div>
          <Input
            prefix={<Icon icon="mdi:password-outline" width={16} height={16} />}
            placeholder="********"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Space>
        <Space
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          <Button
            type="primary"
            onClick={async () => {
              // console.log("submit");
              onSubmit(username, password);
            }}
          >
            SUBMIT
          </Button>
          <Button
            onClick={() => {
              setUsername("");
              setPassword("");
            }}
          >
            RESET
          </Button>
        </Space>
      </Space>
    </div>
  );
}
export default LoginForm;
