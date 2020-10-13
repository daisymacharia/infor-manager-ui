import React from "react";
import { Content, Footer, Header, Layout } from "./styles";

const PageLayout = ({ children }) => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default PageLayout;
