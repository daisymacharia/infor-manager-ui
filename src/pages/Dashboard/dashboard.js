import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJokes } from "../../store/thunks/jokes";
import { getAnimeCategories } from "../../store/thunks/kitsu/categories";
import { PageLayout } from "../../components";
import Jokes from "../FixedSource/jokes";
import RandomSource from "../RandomSource/kitsu";

const Dashboard = () => {
  const [punchLine, showPunchline] = useState(false);
  const [punchId, showPuchlineId] = useState(null);
  const [fixedSource, showfixedSource] = useState(true);
  const [randomSource, showrandomSource] = useState(false);

  const dispatch = useDispatch();
  const {
    data: { status, jokes },
  } = useSelector((state) => state.jokes);

  const {
    data: { categories },
  } = useSelector((state) => state.categories);

  useEffect(
    () => {
      dispatch(getJokes());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(
    () => {
      dispatch(getAnimeCategories());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleShowPunchLine = (id) => {
    showPunchline(!punchLine);
    showPuchlineId(id);
  };

  const handleShowFixed = () => {
    showfixedSource(true);
    showrandomSource(false);
  };

  const handleShowRandom = () => {
    showfixedSource(false);
    showrandomSource(true);
  };
  return (
    <PageLayout
      handleShowRandom={handleShowRandom}
      handleShowFixed={handleShowFixed}
      fixedSource={fixedSource}
      RandomSource={randomSource}
      center={true}
    >
      {status === "FETCHING" && <div>loading</div>}
      {fixedSource && status === "COMPLETED" && (
        <Jokes
          handleShowPunchLine={handleShowPunchLine}
          punchId={punchId}
          punchLine={punchLine}
          jokes={jokes}
        />
      )}
      {randomSource && status === "COMPLETED" && (
        <RandomSource categories={categories} />
      )}
    </PageLayout>
  );
};

export default Dashboard;
