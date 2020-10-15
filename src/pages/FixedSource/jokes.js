import React from "react";
import { Card, Button } from "../../components";
import { JokesWrapper, JokeSetup, JokePunchline } from "./styles";

const Jokes = ({ jokes, punchLine, punchId, handleShowPunchLine }) => {
  return (
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
  );
};

export default Jokes;
