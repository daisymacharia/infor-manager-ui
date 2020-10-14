import React, { useContext } from "react";
import {
  Content,
  Footer,
  Header,
  Layout,
  MenuPanel,
  MenuItem,
  Logout,
} from "./styles";
import Logo from "../Logo/logo";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserContext } from "../../context/Auth";
import { logout } from "../../store/thunks/user";

const PageLayout = ({
  children,
  center,
  noScroll,
  handleShowFixed,
  handleShowRandom,
  fixedSource,
  RandomSource,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useContext(UserContext);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Layout noScroll={noScroll}>
      <Header>
        <Logo />
        {history.location.pathname === "/dashboard" && (
          <MenuPanel>
            <MenuItem onClick={handleShowFixed} selected={fixedSource}>
              Fixed-source
            </MenuItem>
            <MenuItem onClick={handleShowRandom} selected={RandomSource}>
              Random-source
            </MenuItem>
          </MenuPanel>
        )}
        {user?.user?.username ? (
          <div
            style={{
              display: "flex",
              height: "100%",
              alignItems: "center",
            }}
          >
            <div style={{ marginRight: "20px" }}>
              Hello, {user?.user?.username}
            </div>
            <Logout onClick={handleLogout}> Logout</Logout>
          </div>
        ) : (
          <div></div>
        )}
      </Header>
      <Content center={center}>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default PageLayout;
