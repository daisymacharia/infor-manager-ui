import React from "react";
import { PageLayout, Button } from "../../components";
import { SyledLink, Header, HomeWrapper, StyledImage } from "./styles";
import image from "../../assets/information.jpg";

const Home = () => {
  return (
    <PageLayout center="center">
      <HomeWrapper>
        <StyledImage src={image}></StyledImage>
        <Header>Information Hub</Header>
        <SyledLink to="/register" title="Register">
          <h3 style={{ textAlign: "start" }}>Don't have an account?</h3>
          <Button text="Create account" width="150px" marginTop="1rem" />
        </SyledLink>
        <SyledLink to="/login" title="Login">
          <h3 style={{ textAlign: "start" }}>Already have an account?</h3>
          <Button text="Sign In" width="150px" marginTop="1rem" />
        </SyledLink>
      </HomeWrapper>
    </PageLayout>
  );
};

export default Home;
