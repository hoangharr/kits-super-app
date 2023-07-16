import { Typography, Space, Button } from "antd";
import { ReactComponent as Logo } from "./batman.svg";

const { Text, Link } = Typography;

// eslint-disable-next-line react/prop-types
function Profile({ logOut }) {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginTop: "16px",
        }}
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <Logo />
          <Text
            style={{
              color: "#E1E1D9",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Đỗ Minh Hoàng
          </Text>
          <Link
            style={{
              color: "#E1E1D9",
            }}
            href="mailto:gigabyte.rp@gmail.com"
          >
            gigabyte.rp@gmail.com
          </Link>
          <Text
            style={{
              color: "#E1E1D9",
            }}
          >
            20/10/1995
          </Text>
          <Button type="link" onClick={logOut}>
            Logout
          </Button>
        </Space>
      </div>
    </>
  );
}
export default Profile;
