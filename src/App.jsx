import {
  Layout,
  Typography,
  Menu,
  Space,
  Button,
  Input,
  Dropdown,
  Divider,
  Card,
} from "antd";
import { Link, Switch, Route, useHistory } from "react-router-dom";

import { Icon } from "@iconify/react";
import {
  CopyrightOutlined,
  SearchOutlined,
  DownCircleFilled,
} from "@ant-design/icons";
import { ReactComponent as Logo } from "./batman.svg";
import { ReactComponent as Logo2 } from "./super.svg";
import "./App.css";

import HelloWorld from "./mini-apps/HelloWorld";
import UnitConverter from "./mini-apps/UnitConverter/UnitConverter";
import Calc from "./mini-apps/Calculator/Calc";
import Chessboard from "./mini-apps/Chessboard/App";
import Pomodoro from "./mini-apps/Pomodoro/App";
import Minesweeper from "./mini-apps/Minesweeper/App";
import LoginForm from "./mini-apps/LoginForm";
import Profile from "./mini-apps/Profile";
import LanguageSwitcher from "./mini-apps/LanguageSwitcher";
import tr from "./translang";

import { useState, useEffect } from "react";

const { Header, Content, Footer, Sider } = Layout;
const { Title, Text } = Typography;

function App() {
  const [lang, setLang] = useState("en");
  const [collapsed, setCollapsed] = useState(false);
  const [token, setToken] = useState(null);
  const [quote, setQuote] = useState("");
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const pathname = window.location.pathname;
  const history = useHistory();
  if ((!token || !token.length) && pathname !== "/login") {
    history.push("/login");
  }

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/quote", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      });
      const data = await response.json();
      setQuote(data);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function title() {
    if (currentPath === "/calculator") {
      return tr("Calculator", lang);
    }
    if (currentPath === "/pomodoro") {
      return tr("Pomodoro", lang);
    }
    if (currentPath === "/helloworld") {
      return tr("HelloWorld", lang);
    }
    if (currentPath === "/unitconverter") {
      return tr("Unit Converter", lang);
    }
    if (currentPath === "/chessboard") {
      return tr("Chessboard", lang);
    }
    if (currentPath === "/minesweeper") {
      return tr("Minesweeper", lang);
    }
    if (currentPath === "/quotes") {
      return tr("Quotes", lang);
    }
    return tr("Welcome to my Super App!", lang);
  }

  const verticalItems = [
    {
      label: <Link to="/helloworld">{tr("HelloWorld", lang)}</Link>,
      key: "/helloworld",
      icon: <Icon icon="mdi:human-hello" width="20" height="20" />,
    },
    {
      label: <Link to="/unitconverter">{tr("Unit Converter", lang)}</Link>,
      key: "/unitconverter",
      icon: <Icon icon="ri:currency-fill" width="20" height="20" />,
    },
    {
      label: <Link to="/calculator">{tr("Calculator", lang)}</Link>,
      key: "/calculator",
      icon: <Icon icon="mdi:calculator" width="20" height="20" />,
    },
    {
      label: <Link to="/chessboard">{tr("Chessboard", lang)}</Link>,
      key: "/chessboard",
      icon: <Icon icon="fa-solid:chess" width="20" height="20" />,
    },
    {
      label: <Link to="/pomodoro">{tr("Pomodoro", lang)}</Link>,
      key: "/pomodoro",
      icon: <Icon icon="mdi:timer" width="20" height="20" />,
    },
    {
      label: <Link to="/minesweeper">{tr("Minesweeper", lang)}</Link>,
      key: "/minesweeper",
      icon: <Icon icon="mdi:mine" width="20" height="20" />,
    },
    {
      label: <Link to="/quotes">{tr("Quotes", lang)}</Link>,
      key: "/quotes",
      icon: <Icon icon="carbon:request-quote" width="20" height="20" />,
    },
  ];

  const items = [
    {
      label: "Account",
      key: "account",
      icon: <Icon icon="material-symbols:account-circle-outline" />,
    },
    {
      label: "Settings",
      key: "settings",
      icon: <Icon icon="solar:settings-broken" />,
    },
    {
      label: <div onClick={() => setToken(null)}>{tr("Logout", lang)}</div>,
      key: "logout",
      icon: <Icon icon="ant-design:logout-outlined" />,
    },
  ];

  return (
    <>
      {token ? (
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
              backgroundColor: "#272727",
            }}
          >
            <Header
              style={{
                padding: 25,
                margin: "auto",
                display: "flex",
                alignItems: "center",
                color: "white",
                lineHeight: 0,
              }}
            >
              <Space>
                <Link to="/">
                  <Logo2 />
                </Link>
                {collapsed ? (
                  <></>
                ) : (
                  <Title
                    level={4}
                    style={{
                      color: "white",
                      margin: "auto",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <Link to="/" style={{ color: "white" }}>
                      {tr("Super App", lang)}
                    </Link>
                  </Title>
                )}
              </Space>
            </Header>

            {collapsed ? (
              <></>
            ) : (
              <>
                <Profile logOut={() => setToken(null)} />
                <Divider
                  orientation="left"
                  style={{
                    color: "gray",
                    marginBottom: 0,
                  }}
                >
                  {tr("Menu", lang)}
                </Divider>
              </>
            )}

            <Menu
              items={verticalItems}
              style={{
                backgroundColor: "#272727",
                padding: "10px",
              }}
              onClick={({ key }) => setCurrentPath(key)}
              theme="dark"
            />
          </Sider>
          <Layout style={{ minHeight: "100vh" }}>
            <Header
              style={{
                backgroundColor: "#272727",
                display: "flex",
                alignItems: "center",
                padding: 0,
              }}
            >
              <Button
                type="text"
                icon={
                  collapsed ? (
                    <Icon
                      icon="line-md:menu-unfold-right"
                      width="20"
                      height="20"
                    />
                  ) : (
                    <Icon
                      icon="line-md:menu-fold-right"
                      width="20"
                      height="20"
                    />
                  )
                }
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "20px",
                  width: 64,
                  height: 64,
                  color: "white",
                }}
              />
              <Title
                level={5}
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  margin: "auto 25px auto auto",
                }}
              >
                <Space>
                  <LanguageSwitcher
                    lang={lang}
                    languages={[
                      { lang: "vi", label: "VIE" },
                      { lang: "en", label: "ENG" },
                    ]}
                    onClick={(newLang) => setLang(newLang)}
                  />
                  <Divider type="vertical" />
                  <Input
                    size="large"
                    placeholder={tr("Search", lang)}
                    prefix={<SearchOutlined />}
                  />
                  {collapsed ? (
                    <>
                      <Divider type="vertical" />
                      <Space>
                        <Dropdown menu={{ items }} trigger={["click"]}>
                          <a onClick={(e) => e.preventDefault()}>
                            <Space style={{ color: "#E1E1D9" }}>
                              <Logo />
                              HoangDM
                              <DownCircleFilled />
                            </Space>
                          </a>
                        </Dropdown>
                      </Space>
                    </>
                  ) : (
                    <></>
                  )}
                </Space>
              </Title>
            </Header>
            <Content
              style={{
                paddingLeft: 35,
                color: "white",
                backgroundColor: "#E1E1D9",
                backgroundImage: "url('src/1084546.png')",
                backgroundSize: "2000px 900px",
                // backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              }}
            >
              <Title level={2} style={{ color: "white" }}>
                {title()}
              </Title>
              <Switch>
                <Route path="/helloworld">
                  <HelloWorld />
                </Route>
                <Route path="/unitconverter">
                  <UnitConverter />
                </Route>
                <Route path="/calculator">
                  <Calc />
                </Route>
                <Route path="/chessboard">
                  <Chessboard />
                </Route>
                <Route path="/pomodoro">
                  <Pomodoro />
                </Route>
                <Route path="/minesweeper">
                  <Minesweeper />
                </Route>
                <Route path="/quotes">
                  <Space direction="vertical">
                    <Button
                      onClick={() => {
                        fetchData();
                      }}
                    >
                      {tr("New quote!", lang)}
                    </Button>
                    <Card
                      title={quote.author}
                      bordered={false}
                      style={{ width: "700px" }}
                    >
                      <p>{quote.quote}</p>
                    </Card>
                  </Space>
                </Route>
              </Switch>
            </Content>
            <Footer
              style={{
                textAlign: "center",
                width: "100%",
                backgroundColor: "gray",
              }}
            >
              {tr("Copyright by Do Minh Hoang", lang)}
              <CopyrightOutlined style={{ margin: "5px" }} />
              <Text italic>2023</Text>
            </Footer>
          </Layout>
        </Layout>
      ) : (
        <Switch>
          <Route path="/login">
            <LoginForm
              onSubmit={async (username, password) => {
                const response = await fetch(
                  "http://localhost:3000/authenticate",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, password }),
                  }
                );
                const { token } = await response.json();
                setToken(token);
              }}
            />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
