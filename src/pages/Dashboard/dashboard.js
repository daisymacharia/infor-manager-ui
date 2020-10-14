import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJokes } from "../../store/thunks/jokes";
import { Card, PageLayout, Button } from "../../components";
import { JokesWrapper, JokeSetup, JokePunchline } from "./styles";

const Dashboard = () => {
  const [punchLine, showPunchline] = useState(false);
  const [punchId, showPuchlineId] = useState(null);
  const [fixedSource, showfixedSource] = useState(true);
  const [randomSource, showrandomSource] = useState(false);

  const dispatch = useDispatch();
  const {
    data: { status, jokes },
  } = useSelector((state) => state.jokes);

  useEffect(
    () => {
      dispatch(getJokes());
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
        <JokesWrapper>
          {jokes?.length > 0 &&
            jokes.map((joke) => (
              <Card key={joke.id}>
                <JokeSetup> {joke.setup}</JokeSetup>
                {punchLine && (
                  <JokePunchline show={punchId === joke.id}>
                    {joke.punchline}
                  </JokePunchline>
                )}
                <Button
                  text={
                    punchLine && punchId === joke.id
                      ? "Hide Punchline"
                      : "Reveal PunchLine"
                  }
                  onClick={() => handleShowPunchLine(joke.id)}
                />
              </Card>
            ))}
        </JokesWrapper>
      )}
      {randomSource && <div>random</div>}
    </PageLayout>
  );
};

export default Dashboard;
