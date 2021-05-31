import { useSelector, useDispatch } from "react-redux";
import { Layout, Row, Col, Button, Spin } from "antd";
import { logout, getUserList } from "../store/asyncActions/userAsyncActions";
import UsersTable from "../components/usersTable";

const WorkPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const loading = useSelector((state) => state.users.loading);
  const userList = useSelector((state) => state.users.userList);

  const doLogout = () => {
    if (user) dispatch(logout());
  };

  const doGetUserList = () => {
    dispatch(getUserList());
  };
  return (
    <Layout>
      <Spin spinning={loading}>
        <div className="header-header-wrapper">
          <div className="d-flex align-center">
            <div className="floating">
              <img className="login__logo" src="/logo.png" alt="logo"></img>
            </div>
            User list manager
          </div>
          <div>
            <div className="header__account">{user.name} </div>
            <div
              onClick={() => doLogout()}
              className="header__account header__account--small"
            >
              Logout
            </div>
          </div>
        </div>
        <Layout.Content className="main-wrapper">
          <Row justify="center">
            <Col md={12} span={8} className="text-center">
              <Button
                type="primary"
                disabled={!user.role.permissions.includes("READ_POSTS")}
              >
                Read posts
              </Button>
            </Col>
            <Col md={12} span={8} className="text-center">
              <Button
                type="primary"
                onClick={doGetUserList}
                disabled={!user.role.permissions.includes("READ_USERS")}
              >
                List Users
              </Button>
            </Col>
            {userList && (
              <div style={{ marginTop: 50 }}>
                <UsersTable userList={userList} />
              </div>
            )}
          </Row>
        </Layout.Content>
      </Spin>
    </Layout>
  );
};

export default WorkPage;
