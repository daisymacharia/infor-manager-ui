import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJokes } from "../../store/thunks/jokes";
import { getAnimeCategories } from "../../store/thunks/kitsu/categories";
import { PageLayout } from "../../components";
import { Link } from "react-router-dom";
import { Button } from "../../components";

const Home = () => {
  return (
    <PageLayout>
      <Link to="/register">
        <Button text="Create account" />
      </Link>
      <Link to="/login">
        <Button text="Sign In" />
      </Link>
    </PageLayout>
  );
};

export default Home;
