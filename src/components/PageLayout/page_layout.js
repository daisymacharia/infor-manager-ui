import React from "react";
import { Content, Footer, Header, Layout, MenuPanel, MenuItem } from "./styles";
import Logo from "../Logo/logo";
import { useHistory } from "react-router-dom";

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
        <div> profile</div>
      </Header>
      <Content center={center}>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default PageLayout;
